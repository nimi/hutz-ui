export default function rgba(arr, alpha) {
	return `rgba(${arr.map(v => `${v},`).join('')}${alpha || 1})`;
}
