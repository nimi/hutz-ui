import color from './colors';
import typeography from './typeography';

const initialColor = color.gray;
const errorColor = color.red;
const successColor = color.green;
const labelColor = color('gray', 3);

const InputStyles = {
	base: {
		...typeography.body1,
		backgroundColor: 'transparent',
		border: 'none',
		boxSizing: 'border-box',
		color: color('gray', 4),
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '6px 1px'
	},

	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column'
	},

	icon: {
		display: 'block',
		position: 'absolute',
		right: '0.5em',
		bottom: 0
	},

	label: {
		...typeography.body2,
		color: labelColor,
		fontWeight: 500,
		top: '-35px',
		textTransform: 'uppercase'
	},

	inputContainer: {
		borderBottom: `solid 2px ${initialColor}`,
		boxSizing: 'border-box',
		color: labelColor
	},

	error: {
		borderBottom: `solid 2px ${errorColor}`
	},

	success: {
		borderBottom: `solid 2px ${successColor}`
	},

	textarea: {
		borderTop: `solid 2px ${initialColor}`,
		borderLeft: `solid 2px ${initialColor}`,
		borderRight: `solid 2px ${initialColor}`,
		borderBottom: `solid 2px ${initialColor}`,
		padding: '0 10px'
	},

	range: {
		borderBottom: null
	},

	label: {
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
