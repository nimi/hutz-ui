import React from 'react';
import { isElement } from 'react-addons-test-utils';
import { is, isNil, sort, keys, range, pickBy, mapObj } from 'ramda';
import traverse from 'traverse';

const noop = () => {};
const collapseWhiteSpace = val => String(val).replace(/\s+/g, ` `);
const spacer = n => range(0, n).map(() => `  `).join(``);
const noChildren = p => p !== 'children';
const meaningfulChildren = c => c !== true && c !== false && c !== null && c !== ``;

export default function jsxStringify(ReactElement) {
	return jsxToString({ReactElement});
}

function jsxToString({ ReactElement = null, ...options }) {
	if (is(String, ReactElement) || is(Number, ReactElement)) { return ReactElement; }
	if (!isElement(ReactElement)) { throw new Error('not a valid react/jsx element'); }

	return generateString(ReactElement, { ...options });
}

function getElementName({ type }) {
	return type.displayName || (is(Function, type) ? 'No Name' : type);
}

function generateString(element, { level = 0, inline = false }) {
	const tagName = getElementName(element);
	const props = formatProps(element.props);
	const children = React.Children.toArray(element.props.children)
		.filter(meaningfulChildren);
	const attributes = {
		ref: element.ref && getJSXAttr('ref', element.ref),
		key: element.key && getJSXAttr('key', element.key)
	};
	const atts = props.concat(attributes)
		.filter(v => !isNil(v.name))
		.map(({val, name}, arr) => (
			arr.length > 1 || !inline ?
				`\n${spacer(level + 1)}${formatType(name, val)}` :
				` ${formatType(name, val)}`
		)).join('');

	let out = `<${tagName}`;
	out += atts;

	if (atts.length > 1 && !inline) {
		out += `\n${spacer(level)}`;
	}

	if (children.length > 0) {
		out += `>`;
		level++;
		if (!inline) {
			out += `\n`;
			out += spacer(level);
		}

		if (typeof children === 'string') {
			out += children;
		} else {
			out += children
				.reduce(mergePlainStringChildren, [])
				.map(
					recurse({level, inline})
				).join('\n' + spacer(level));
		}
		if (!inline) {
			out += `\n`;
			out += spacer(level - 1);
		}

		out += `</${tagName}>`;

	} else {
		if (atts.length <= 1) {
			out += ` `;
		}

		out += '/>';
	}

	return out;
}

function hasRefAttribute(ref) {
	return !isNil(ref);
}

function hasKeyAttribute(key) {
	return !isNil(key) && !/^\./.test(key);
}

function withoutChildren(p) {
	return p !== 'children';
}

function sortObject(o) {
	return sort((a, b) => a > b, keys(o))
		.reduce((prev, next) => {
			prev[next] = o[next];
			return prev;
		}, {});
}

function sanitizeObjectString(s) {
	const str = JSON.stringify(s);

	return collapseWhiteSpace(str)
		.replace(/{ /g, '{')
		.replace(/ }/g, '}')
		.replace(/\[ /g, '[')
		.replace(/ \]/g, ']');
}

function stringifyObj(any) {
	if (!Object.keys(any).length || !any.length) { return sanitizeObjectString(any); }

	const obj = traverse(any).map(function(v) {
		if (isElement(v) || this.isLeaf) { this.update(formatJSXVal(v)); }
		return v;
	});

	return sanitizeObjectString(sortObject(obj));
}

function formatJSXVal(val) {
	let str = val;

	if (is(String, val)) { return val; }
	if (is(Function, val)) { return noop; }
	if (is(Object, val)) { str = stringifyObj(val); }
	if (isElement(val)) { str = jsxToString({element: val, inline: true}); }

	const wrapper = '__jsxToString__Wrapper__';

	return `<${wrapper}>${str}</${wrapper}>`;
}

function formatJSXAttr(attr) {
	return `"${formatJSXVal(attr)}"`;
}

function getJSXAttr(name, value) {
	const re = /<\/?__jsxToString__Wrapper__>'?/g;
	const val = formatJSXAttr(value).replace(re, ``);

	return { name, val };
}

function formatProps(props) {
	return Object.keys(props)
		.filter(withoutChildren)
		.sort()
		.map(p => getJSXAttr(p, props[p]));
}

function formatType(name, val) {
	const value = val.replace(/\"/g, '');
	if (is(Number, Number(value)) && !isNaN(Number(value))) {
		return `${name}={${value}}`;
	} else if (/(true|false)/.test(val)) {
		return `${name}${val === "false" ? "={false}" : ""}`;
	} else {
		return `${name}=${val}`;
	}
}


function mergePlainStringChildren(prev, cur) {
	var lastItem = prev[prev.length - 1];

	if (typeof lastItem === 'string' && typeof cur === 'string') {
		prev[prev.length - 1] += cur;
	} else {
		prev.push(cur);
	}

	return prev;
}

function recurse({level, inline}) {
	return ReactElement => jsxToString({ReactElement, level, inline});
}
