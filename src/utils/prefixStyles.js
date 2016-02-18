import {capitalize} from './capitalize';

const wk = 'Webkit';
const mz = 'Moz';
const ms = 'ms';
const op = 'o';

const all = [wk, mz, ms, op];
const w = [wk];
const wz = [wk, mz];
const ws = [wk, ms];
const wzs = [wk, mz, ms];
const wzo = [wk, ms, op];

const client = ((agent) => {
	if (/Chrome|Safari/.test(agent)) { return wk; }
	if (/Firefox/.test(agent)) { return mz; }
	if (/MSIE/.test(agent)) { return ms; }
	if (/Opera/.test(agent)) { return [wk, op]; }

	return all;
})(navigator ? navigator.userAgent : '');

const rules = new Map([
	['alignContent', w],
	['alignItems', w],
	['alignSelf', w],
	['animation', wz],
	['animationDelay', wz],
	['animationDirection', wz],
	['animationDuration', wz],
	['animationFillMode', wz],
	['animationIterationCount', wz],
	['animationName', wz],
	['animationPlayState', wz],
	['animationTimingFunction', wz],
	['appearance', wz],
	['backfaceVisibility', wz],
	['backgroundClip', w],
	['borderImage', wzo],
	['borderImageSlice', wzo],
	['boxShadow', wzs],
	['boxSizing', wz],
	['clipPath', w],
	['columns', wz],
	['cursor', wz],
	['flex', ws], //new flex and 2012 specification ], no support for old specification
	['flexBasis', ws],
	['flexDirection', ws],
	['flexFlow', ws],
	['flexGrow', ws],
	['flexShrink', ws],
	['flexWrap', ws],
	['fontSmoothing', wz],
	['justifyContent', wz],
	['order', wz],
	['perspective', wz],
	['perspectiveOrigin', wz],
	['transform', wzs],
	['transformOrigin', wzs],
	['transformOriginX', wzs],
	['transformOriginY', wzs],
	['transformOriginZ', wzs],
	['transformStyle', wzs],
	['transition', wzs],
	['transitionDelay', wzs],
	['transitionDuration', wzs],
	['transitionProperty', wzs],
	['transitionTimingFunction', wzs],
	['userSelect', wzs]
]);

const clientRules = new Map(
	[...rules].filter(([key, val]) => val.some(v => v === client))
);

function updateWithPrefix(key) {
	return `${client}${capitalize(key)}`;
}

function iterateKeys(obj) {
	return Object.keys(obj)
		.reduce((prev, curr) => {
			if (typeof val === 'object') {
				prev[curr] = iterateKeys(obj);
			} else {
				const key = clientRules.has(curr) ? updateWithPrefix(curr) : curr;
				prev[key] = obj[curr];
			}

			return prev;
		}, {});
}

export default function prefix(style) {
	if (typeof style !== 'object') {
		throw new TypeError('Invalid argument type, expect object');
	}

	return iterateKeys(style);
};
