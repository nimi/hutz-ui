'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = buttonStyles;

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _typeography = require('./typeography');

var _typeography2 = _interopRequireDefault(_typeography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttonStyles(c) {
	var BASE_COLOR = c || 'white';
	var alpha = c ? 1 : 0;
	var buttonTypeography = _typeography2.default.body1;
	var isWhite = BASE_COLOR === 'white';
	var contrastColor = isWhite ? _colors2.default.black : _colors2.default.white;
	var buttonColor = (0, _colors2.default)(BASE_COLOR, 1, alpha);
	var buttonShadowColor = (0, _colors2.default)(BASE_COLOR, 4);

	var styleMap = {
		BASE_COLOR: BASE_COLOR,

		initialStyle: _extends({}, buttonTypeography, {
			cursor: 'pointer',
			position: 'relative',
			outline: 'none',
			border: isWhite ? 'solid 1px ' + (0, _colors2.default)('gray', 3) : 0,
			borderRadius: 3,
			color: contrastColor,
			padding: '0.75em 1.25em',
			textAlign: 'center',
			lineHeight: '1em',
			backgroundColor: buttonColor
		}),

		fillStyle: {
			width: '100%'
		},

		disabledStyle: {
			backgroundColor: (0, _colors2.default)('gray', 3),
			boxShadow: '0',
			color: (0, _colors2.default)('gray', 5),
			cursor: 'default',
			top: '2px'
		},

		raisedStyle: {
			boxShadow: '0px 3px 0px 0px ' + buttonShadowColor,
			':active': {
				top: '2px',
				boxShadow: '0px 1px 0px 0px ' + buttonShadowColor
			}
		},

		outlineStyle: {
			backgroundColor: 'transparent',
			color: buttonColor,
			border: '1px solid ' + buttonColor
		},

		linkStyle: {
			border: 'none',
			backgroundColor: 'transparent',
			color: buttonColor
		}
	};

	return styleMap;
}