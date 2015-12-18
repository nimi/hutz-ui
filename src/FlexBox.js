import React, { PropTypes } from 'react';
import { scale, breakpoints } from './styles';
import { mm } from './utils/dom';

const styleDisplay = (sizes) =>
	Object.keys(sizes)
		.map(k => ({ val: sizes[k], bp: breakpoints[k] }))
		.some(s => (s.val && mm(s.bp).matches) ||
			!Object.keys(sizes).some(v => sizes[v]));

function FlexBox({
	wrap, col, align, justify, gutter, sm, md, lg,
	...props
}) {

	const display = styleDisplay({sm, md, lg}) ? 'flex' : 'block';

	const style = {
		display,
		height: '100%',
		alignItems: align || null,
		flexWrap: wrap ? 'wrap' : null,
		flexDirection: col ? 'column' : null,
		justifyContent: justify || null,
		marginLeft: gutter ? -scale[gutter] : null,
		marginRight: gutter ? -scale[gutter] : null
	};

	return (
		<div
			{ ...props }
			style={ style }
		/>
	);
}

FlexBox.propTypes = {
	align: PropTypes.oneOf([
		'stretch',
		'center',
		'baseline',
		'flex-start',
		'flex-end'
	]),
	col: PropTypes.bool,
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

FlexBox.defaultProps = {
	lg: false,
	md: false,
	sm: false
};

export default FlexBox;
