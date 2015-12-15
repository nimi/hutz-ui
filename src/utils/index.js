import { toUpper } from 'ramda';

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
