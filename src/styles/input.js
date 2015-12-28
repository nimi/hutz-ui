import color from './colors';

const initialColor = color.gray;
const focusColor = color.blue;
const errorColor = color.red;
const successColor = color.green;
const labelColor = color.gray;

const InputStyles = {
	initialInputStyle: {
		backgroundColor: 'transparent',
		border: 'none',
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
		right: 5,
		bottom: 5
	},

	initialLabelStyle: {
		fontWeight: 500,
		top: '-35px'
	},

	inputContainerStyle: {
		border: `solid 2px ${initialColor}`,
		boxSizing: 'border-box',
		':focus': {
			border: `solid 2px ${focusColor}`
		}
	},

	activeIconStyle: {
		display: 'block'
	},

	errorInputStyle: {
		border: `solid 2px ${errorColor}`
	},

	successInputStyle: {
		border: `solid 2px ${successColor}`
	},

	successColor,
	errorColor
};

export default InputStyles;
