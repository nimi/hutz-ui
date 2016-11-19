import React, { PropTypes } from 'react';
import { scale, breakpoints } from '../../styles';
import { w } from '../../utils';
import { mm, transitionEnd } from '../../utils/dom';
import Container from '../Container';

function Box({
	col, sm, md, lg,
	...props
}) {
	const sizes = { sm, md, lg };
	const widthProp = styleWidth(sizes);
	const width = ( widthProp && !col ) ? w(sizes[widthProp]) : w(col);
	const styleProps = boxStyle({...props, width});
	const style = { ...styleProps, ...props.style };

	return (
		<Container
			{ ...props }
			sm={sm}
			md={md}
			lg={lg}
			style={style}
			className={className || 'hutz-box'}
		/>
	);
}


Box.displayName = 'Box';

Box.propTypes = {
	align: PropTypes.oneOf([
		'stretch',
		'center',
		'baseline',
		'flex-start',
		'flex-end'
	]),
	col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	fill: PropTypes.bool,
	lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: PropTypes.oneOf([0, 1, 2, 3, 4]),
	sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

export default Box;

const boxStyle = ({align, fill, width}) => ({
	alignSelf: align || null,
	boxSizing: 'border-box',
	flex: fill ? '1 1 auto' : null,
	flexBasis: width,
	width
});

const styleWidth = ({sm = 12, md = 12, lg = 12}) => {
	const size = Object.keys({sm, md, lg})
		.map(key => ({ key, bp: breakpoints[key] }))
		.filter(s => mm(s.bp) && mm(s.bp).matches)
		.slice(-1);

	return size.length && size[0].key;
};
