import React, { PropTypes } from 'react';
import Container from '../Container';
import { scale, breakpoints } from '../../styles';
import { mm } from '../../utils/dom';

function FlexBox({
	width, wrap, direction, align, alignItems, justify, gutter, sm, md, lg, style = {},
	...props
}) {

	const display = styleDisplay({sm, md, lg}) ? 'flex' : 'block';

	const flexBoxStyle = {
		display,
		width: width || null,
		minHeight: 0,
		height: 'auto',
		alignItems: align || null,
		flexWrap: wrap ? 'wrap' : null,
		flexDirection: direction || null,
		justifyContent: justify || null,
		marginLeft: gutter ? -scale[gutter] : null,
		marginRight: gutter ? -scale[gutter] : null
	};

	return (
		<Container
			{ ...props }
			style={{ ...flexBoxStyle, ...style }}
		/>
	);
}

FlexBox.displayName = 'FlexBox';

FlexBox.propTypes = {
	align: PropTypes.oneOf([
		'stretch',
		'center',
		'baseline',
		'flex-start',
		'flex-end'
	]),
	direction: PropTypes.oneOf([
		'row',
		'row-reverse',
		'column',
		'column-reverse'
	]),
	gutter: PropTypes.oneOf([0, 1, 2, 3, 4]),
	justify: PropTypes.oneOf([
		'center',
		'space-around',
		'space-between',
		'flex-start',
		'flex-end'
	]),
	lg: PropTypes.bool,
	md: PropTypes.bool,
	sm: PropTypes.bool,
	wrap: PropTypes.bool
};

export default FlexBox;

const styleDisplay = (sizes) =>
	Object.keys(sizes)
		.map(k => ({ val: sizes[k], bp: breakpoints[k] }))
		.some(s => (s.val && mm(s.bp).matches) ||
			!Object.keys(sizes).some(v => sizes[v]));
