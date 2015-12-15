import { colors, GRAY, BLUE, RED, GREEN } from './colors';
import { typeography } from './typeography';

const initialColor = colors[GRAY].C4;
const focusColor = colors[BLUE].C5;
const errorColor = colors[RED].C5;
const successColor = colors[GREEN].C5;
const labelColor = colors[GRAY].C5;

export const InputTextStyles = {
	initialInputStyle: {
		backgroundColor: 'transparent',
		border: `solid 1px ${initialColor}`,
		boxSizing: 'border-box',
		color: labelColor,
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '10px'
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

	focusInputStyle: {
		border: `solid 2px ${focusColor}`,
		padding: '9px'
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
