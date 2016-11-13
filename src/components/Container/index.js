import React, { PropTypes } from 'react';
import { scale, breakpoints, colors } from '../../styles';
import { w } from '../../utils';
import { mm } from '../../utils/dom';
import padding from '../../utils/padding';
import margin from '../../utils/margin';
import radii from '../../utils/radii';

function Container({
	backgroundColor,
	color,
	col,
	sm,
	md,
	lg,
	style,
	tagName,
	circle,
	containerStyle,
	p,
	pb,
	pl,
	pr,
	pt,
	py,
	px,
	m,
	mb,
	ml,
	mr,
	mt,
	mx,
	my,
	round,
	fill,
	borderLeft, // Deprecated
	borderColor, // Deprecated
	update, //Deprecated
	...props
}) {
	const bgc = colors(backgroundColor) || backgroundColor;
	const c = color ? colors(color) : color;
	const sizes = { sm, md, lg };
	const widthProp = styleWidth(sizes);
	const width = ( widthProp && !col ) ? w(sizes[widthProp]) : w(col);
	const pd = {p, px, py, pb, pr, pl, pt};
	const mg = {m, mx, my, mb, mr, ml, mt};

	const Component = tagName || 'div';
	const cxStyle = Object.assign(
		baseStyle({width, bgc, c, fill}),
		padding(pd, scale),
		margin(mg, scale),
		radii({round, circle}),
		style
	);

	return (
		<Component
			{ ...props }
			style={cxStyle}
		/>
	);
}

//React.renderToString(Container);

Container.displayName = 'Container';

Container.propTypes = {
	backgroundColor: PropTypes.string,
	circle: PropTypes.bool,
	col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	color: PropTypes.string,
	containerStyle: PropTypes.object,
	lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
	m: PropTypes.oneOf([0, 1, 2, 3, 4]),
	mb: PropTypes.oneOf([0, 1, 2, 3, 4]),
	ml: PropTypes.oneOf([0, 1, 2, 3, 4]),
	mr: PropTypes.oneOf([0, 1, 2, 3, 4]),
	mt: PropTypes.oneOf([0, 1, 2, 3, 4]),
	mx: PropTypes.oneOf([0, 1, 2, 3, 4]),
	my: PropTypes.oneOf([0, 1, 2, 3, 4]),
	round: PropTypes.bool,
	sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	tagName: PropTypes.any
};

export default Container;

const baseStyle = ({bgc = null, c = null, shadow = false, fill = true, width}) => ({
	backgroundColor: bgc,
	boxSizing: 'border-box',
	boxShadow: shadow ? '0 2px 5px 0 rgba(0, 0, 0, 0.26)' : null,
	color: c,
	width: fill ? width : null
});

const styleWidth = ({sm = 12, md = 12, lg = 12}) => {
	const size = Object.keys({sm, md, lg})
		.map(key => ({ key, bp: breakpoints[key] }))
		.filter(s => mm(s.bp) && mm(s.bp).matches)
		.slice(-1);

	return size.length && size[0].key;
};
