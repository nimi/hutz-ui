export { default as rgba } from './color';
export { default as capitalize } from './capitalize';
export const l = (...args) => console.log(...args);
export const noop = () => {};
export const w = (v = 12) => v ? (v / 12 * 100) + '%' : null;
export const maxmin = (val, min, max) =>
	val > max ? max : val < min ? min : val;
export const randomId = len => {
	const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	const id = Array(len).fill().map(() => s.charAt(Math.floor(Math.random() * s.length)));
	return `hutz-${id.join('')}`;
};
