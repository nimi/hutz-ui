export default function rgba(arr, alpha) {
	return `rgba(${arr.map(v => `${v},`).join('')}
		${Object.is(alpha, undefined) ? 1 : alpha})`;
}
