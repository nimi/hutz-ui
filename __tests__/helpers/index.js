import React from 'react';
import ReactDOM from 'react-dom';
import jsdomify from 'jsdomify';
import test from 'blue-tape';
import sd from 'skin-deep';

const noop = () => {};

export function t(msg, testFn = noop) {
	test(msg, testFn);
}

export function statelessComponent(Component) {
	const tree = sd.shallowRender(Component);

	return {
		instance: tree.getMountedInstance(),
		dom: tree.getRenderOutput(),
		style: tree.getRenderOutput().props.style
	};
}

export function suite(name, startTests) {
	const before = test;
	const after = test;

	before(name, (assert) => {
		assert.end();
	});

	before('create dom instance', (assert) => {
		jsdomify.create();

		assert.end();
	});

	startTests();

	after('destroy dom', (assert) => {
	    ReactDOM.unmountComponentAtNode(document.body);
	    document.body.innerHTML = '';

	    jsdomify.destroy();

	    assert.end();
	});
}
