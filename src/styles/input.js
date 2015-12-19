import { colors } from './colors';
import { typeography } from './typeography';

const { GRAY, BLUE, RED, GREEN } = colors;

const initialColor = GRAY.C4;
const focusColor = BLUE.C5;
const errorColor = RED.C5;
const successColor = GREEN.C5;
const labelColor = GRAY.C5;

export const InputTextStyles = {
	initialInputStyle: {
		backgroundColor: 'transparent',
		border: `solid 1px ${initialColor}`,
		boxSizing: 'border-box',
		color: labelColor,
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '10px',
		':focus': {
			border: `solid 2px ${focusColor}`,
			padding: '9px'
		}
	},

	initialContainerStyle: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column'
	},

	initialIconStyle: {
		display: 'none',
		position: 'absolute',
		right: '3px',
		bottom: 0
	},

	initialLabelStyle: {
		fontWeight: 500,
		top: '-35px'
	},

	activeIconStyle: {
		display: 'block'
	},

	errorInputStyle: {
		border: `solid 2px ${errorColor}`,
		padding: '9px'
	},

	successInputStyle: {
		border: `solid 2px ${successColor}`,
		padding: '9px'
	},

	successColor,
	errorColor
};
