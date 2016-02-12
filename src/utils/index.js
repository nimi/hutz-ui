import { toUpper } from 'ramda';
export { default as rgba } from './color';

function changeFirstCase(fn) {
	return (string) => {
		const chr = string.charAt(0);
		const trailing = string.slice(1);

		return fn(chr) + trailing;
	};
}

export const l = (...args) => console.log(...args);

export const noop = () => {};

export const capitalize = changeFirstCase(toUpper);

export const w = (v = 12) => {
	return v ? (v / 12 * 100) + '%' : null;
};

export const maxmin = (val, min, max) =>
	val > max ? max : val < min ? min : val;
