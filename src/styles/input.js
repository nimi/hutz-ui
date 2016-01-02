import color from './colors';
import typeography from './typeography';

const initialColor = color.gray;
const focusColor = color.blue;
const errorColor = color.red;
const successColor = color.green;
const labelColor = color('gray', 3);

const InputStyles = {
	initialInputStyle: {
		...typeography.body1,
		backgroundColor: 'transparent',
		border: 'none',
		boxSizing: 'border-box',
		color: color('gray', 4),
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '10px 0',
		':focus': {
			color: color('black', 4)
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
		right: '0.5em',
		bottom: '0.15em'
	},

	initialLabelStyle: {
		...typeography.body2,
		color: labelColor,
		fontWeight: 500,
		top: '-35px'
	},

	inputContainerStyle: {
		borderBottom: `solid 2px ${initialColor}`,
		boxSizing: 'border-box',
		color: labelColor,
		':focus': {
			borderBottom: `solid 2px ${focusColor}`,
			color: 'black'
		}
	},

	activeIconStyle: {
		display: 'block'
	},

	errorInputStyle: {
		borderBottom: `solid 2px ${errorColor}`,
		':focus': {
			borderBottom: `solid 2px ${errorColor}`
		}
	},

	successInputStyle: {
		borderBottom: `solid 2px ${successColor}`,
		':focus': {
			borderBottom: `solid 2px ${successColor}`
		}
	},

	textareaInputStyle: {
		borderTop: `solid 2px ${initialColor}`,
		borderLeft: `solid 2px ${initialColor}`,
		borderRight: `solid 2px ${initialColor}`,
		borderBottom: `solid 2px ${initialColor}`,
		padding: '0 10px',
		':focus': {
			borderTop: `solid 2px ${focusColor}`,
			borderLeft: `solid 2px ${focusColor}`,
			borderRight: `solid 2px ${focusColor}`,
			borderBottom: `solid 2px ${focusColor}`
		}
	},

	labelStyle: {
		color: '#999',
		display: 'inline-block',
		fontSize: '0.85rem',
		fontWeight: 600,
		textTransform: 'uppercase'
	},

	successColor,
	errorColor
};

export default InputStyles;
