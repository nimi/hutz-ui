'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Loader(_ref) {
	var size = _ref.size;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['size', 'color']);

	var _style = style(size, color);

	var container = _style.container;
	var icon = _style.icon;
	var circle = _style.circle;

	return _react2.default.createElement(
		_Container2.default,
		{ style: _extends({}, container), fill: false },
		_react2.default.createElement(
			_radium.StyleRoot,
			null,
			_react2.default.createElement(
				_Icon2.default,
				{
					size: 100,
					style: icon
				},
				_react2.default.createElement('circle', { style: circle, cx: '50', cy: '50', r: '45' })
			)
		)
	);
}

Loader.displayName = 'Loader';

exports.default = (0, _radium2.default)(Loader);

var rotate = _radium2.default.keyframes({
	'100%': {
		transform: 'rotate(360deg)'
	}
}, 'rotate');

var dash = _radium2.default.keyframes({
	'0%': { strokeDasharray: '1,350', strokeDashoffset: 0 },
	'50%': { strokeDasharray: '220, 350', strokeDashoffset: -90 },
	'100%': { strokeDasharray: '220, 350', strokeDashoffset: -270 }
}, 'dash');

var style = function style(size, color) {
	return {
		container: {
			width: size || 50,
			height: size || 50
		},
		icon: {
			animation: 'rotate 1.5s linear infinite',
			animationName: rotate
		},
		circle: {
			animation: 'dash 1.5s ease-in-out infinite 0s',
			animationName: dash,
			strokeDasharray: '1, 400',
			strokeDashoffset: 0,
			strokeLinecap: 'round',
			fill: 'none',
			strokeWidth: 3,
			stroke: _colors2.default[color] || color
		}
	};
};