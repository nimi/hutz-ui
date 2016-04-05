import React, { PropTypes } from 'react';
import Container from '../Container';
import FlexBox from '../FlexBox';

import { colors, zIndex, scale } from '../../styles';

function Step({ width, first, active, activeColor, item, ...props }) {
	const {step, marker, line} = style({width});
	const stepStyle = Object.assign({},
		step,
		{color: active ? activeColor : null},
		props.style
	);

	return (
		<FlexBox
			px={1}
			direction='column'
			align='center'
			style={stepStyle}
			{...props}
		>
			<FlexBox fill={false} style={marker} circle />
			{!first && <div style={line} />}
			<div>{item.name}</div>
		</FlexBox>
	);
}

Step.displayName = 'Step';

Step.propTypes = {
	active: PropTypes.bool,
	activeColor: PropTypes.string,
	first: PropTypes.bool.isRequired,
	width: PropTypes.string.isRequired
};

Step.defaultProps = {
	activeColor: colors.blue
};

export default Step;

const style = ({width}) => ({
	step: {
		position: 'relative',
		textDecoration: 'none',
		textAlign: 'center',
		color: 'inherit',
		lineHeight: 1.25,
		flex: `1 1 ${width}`
	},
	marker: {
		position: 'relative',
		zIndex: zIndex[1],
		width: scale[2],
		height: scale[2],
		marginBottom: scale[1],
		backgroundColor: 'currentcolor'
	},
	line: {
		position: 'absolute',
		top: scale[2] / 2,
		transform: 'translate(-50%, -50%)',
		left: 0,
		right: 0,
		height: 4,
		backgroundColor: 'currentcolor'
	}
});
