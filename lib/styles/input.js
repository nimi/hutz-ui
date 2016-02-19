'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _typeography = require('./typeography');

var _typeography2 = _interopRequireDefault(_typeography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialColor = _colors2.default.gray;
var focusColor = _colors2.default.blue;
var errorColor = _colors2.default.red;
var successColor = _colors2.default.green;
var labelColor = (0, _colors2.default)('gray', 3);

var InputStyles = {
	base: _extends({}, _typeography2.default.body1, {
		backgroundColor: 'transparent',
		border: 'none',
		boxSizing: 'border-box',
		color: (0, _colors2.default)('gray', 4),
		outline: 'none',
		left: 0,
		width: '100%',
		padding: '10px 0',
		':focus': {
			color: (0, _colors2.default)('black', 4)
		}
	}),

	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column'
	},

	icon: {
		display: 'block',
		position: 'absolute',
		right: '0.5em',
		bottom: '0.15em'
	},

	label: _extends({}, _typeography2.default.body2, {
		color: labelColor,
		fontWeight: 500,
		top: '-35px',
		textTransform: 'uppercase'
	}),

	inputContainer: {
		borderBottom: 'solid 2px ' + initialColor,
		boxSizing: 'border-box',
		color: labelColor,
		':focus': {
			borderBottom: 'solid 2px ' + focusColor,
			color: 'black'
		}
	},

	error: {
		borderBottom: 'solid 2px ' + errorColor,
		':focus': {
			borderBottom: 'solid 2px ' + errorColor
		}
	},

	success: {
		borderBottom: 'solid 2px ' + successColor,
		':focus': {
			borderBottom: 'solid 2px ' + successColor
		}
	},

	textarea: {
		borderTop: 'solid 2px ' + initialColor,
		borderLeft: 'solid 2px ' + initialColor,
		borderRight: 'solid 2px ' + initialColor,
		borderBottom: 'solid 2px ' + initialColor,
		padding: '0 10px',
		':focus': {
			borderTop: 'solid 2px ' + focusColor,
			borderLeft: 'solid 2px ' + focusColor,
			borderRight: 'solid 2px ' + focusColor,
			borderBottom: 'solid 2px ' + focusColor
		}
	},

	range: {
		borderBottom: null,
		':focus': null
	},

	label: {
		color: '#999',
		display: 'inline-block',
		fontSize: '0.85rem',
		fontWeight: 600,
		textTransform: 'uppercase'
	},

	successColor: successColor,
	errorColor: errorColor
};

exports.default = InputStyles;