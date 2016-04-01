import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors, zIndex } from '../../styles';

function Dialog({
	open,
	backdropColor,
	onClose,
	fill,
	...props
}) {
	const {container, backdrop, inner} = style({open, backdropColor, fill});
	const innerStyle = Object.assign({},
		inner,
		props.style
	);

	return (
		<Container
			fill={false}
			style={container}
		>
			<Container
				fill={false}
				onClick={onClose}
				style={backdrop}
			/>
			<Container
				fill={false}
				style={innerStyle}
				{...props}
			/>
		</Container>
	);
}

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
};

export default Dialog;

const style = ({open = true}) => ({
	container: {
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		zIndex: zIndex[3],
		display: open ? 'flex' : 'none',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	backdrop: {
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		backgroundColor: colors.black,
		opacity: 0.8
	},
	inner: {
		position: 'relative',
		zIndex: zIndex[2],
		minWidth: 320
	}
});
