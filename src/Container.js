import React, { PropTypes } from 'react';
import { scale, breakpoints } from './styles';
import { w } from './utils';
import { mm, transitionEnd } from './utils/dom';

const styleWidth = ({sm = 12, md = 12, lg = 12}) => {
	const size = Object.keys({sm, md, lg})
		.map(key => ({ key, bp: breakpoints[key] }))
		.filter(s => mm(s.bp) && mm(s.bp).matches)
		.slice(-1);

	return size.length && size[0].key;
};

function Container({
	p, px, py, pt, pb, pl, pr, col, sm, md, lg, style = {},
	...props
}) {
	const sizes = { sm, md, lg };
	const widthProp = styleWidth(sizes);
	const width = ( widthProp && !col ) ? w(sizes[widthProp]) : w(col);

	const boxStyle = {
		boxSizing: 'border-box',
		padding: p ? scale[p] : null,
		paddingTop: py ? scale[py] : (pt ? scale[pt] : null),
		paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
		paddingLeft: px ? scale[px] : (pl ? scale[pl] : null),
		paddingRight: px ? scale[px] : (pr ? scale[pr] : null),
		width
	};

	return (
		<div
			{ ...props }
			style={{ ...boxStyle, ...style }}
		/>
	);
}

Container.displayName = 'Container';

Container.propTypes = {
	col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: PropTypes.oneOf([0, 1, 2, 3, 4]),
	sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

export default Container;
