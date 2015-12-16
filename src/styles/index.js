export { typeography } from './typeography';
export { InputTextStyles } from './input';
export { colors } from './colors';

// workaround for babel 6 -- TODO: Remove
// export function dummy() {}

export const scale = [
	0,
	8,
	16,
	32,
	64
];

export const breakpoints = {
	sm: '(min-width: 32em)',
	md: '(min-width: 48em)',
	lg: '(min-width: 64em)'
};
