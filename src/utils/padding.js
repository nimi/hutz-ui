function padding (
	{ p, px, py, pt, pr, pb, pl },
	scale = []
) {
	const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

	return Object.assign({},
		n('padding', p, scale),
		n('paddingTop', pt, scale),
		n('paddingBottom', pb, scale),
		n('paddingTop', py, scale),
		n('paddingBottom', py, scale),
		n('paddingLeft', pl, scale),
		n('paddingRight', pr, scale),
		n('paddingLeft', px, scale),
		n('paddingRight', px, scale)
	);
}

export default padding;
