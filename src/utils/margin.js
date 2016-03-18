export default function margin (
	{ m, mx, my, mt, mr, mb, ml },
	scale = []
) {
	const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

	return Object.assign({},
		n('margin', m, scale),
		n('marginTop', mt, scale),
		n('marginBottom', mb, scale),
		n('marginTop', my, scale),
		n('marginBottom', my, scale),
		n('marginLeft', ml, scale),
		n('marginRight', mr, scale),
		n('marginLeft', mx, scale),
		n('marginRight', mx, scale)
	);
}
