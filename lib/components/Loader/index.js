'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Loader(_ref) {
	var _ref$size = _ref.size,
	    size = _ref$size === undefined ? 100 : _ref$size,
	    color = _ref.color,
	    props = _objectWithoutProperties(_ref, ['size', 'color']);

	var _style = style(size, color),
	    container = _style.container,
	    circle = _style.circle;

	return _react2.default.createElement(
		_Container2.default,
		_extends({ style: _extends({}, container), fill: false }, props),
		_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
		_react2.default.createElement(
			_Icon2.default,
			{
				size: size,
				className: 'hutz-loader-icon'
			},
			_react2.default.createElement('circle', {
				style: circle, cx: size / 2, cy: size / 2, r: size / 2 - 10,
				className: 'hutz-loader-circle'
			})
		)
	);
}

Loader.displayName = 'Loader';

exports.default = Loader;


var css = '\n\t@keyframes rotate {\n\t\t100% { transform: rotate(360deg); }\n\t}\n\t@keyframes dash {\n\t\t0% { stroke-dasharray: 1, 350; stroke-dashoffset: 0; }\n\t\t50% { stroke-dasharray: 220, 350; stroke-dashoffset: -90; }\n\t\t100% { stroke-dasharray: 220, 350; stroke-dashoffset: -270; }\n\t}\n\t.hutz-loader-circle { \n\t\tanimation: dash 1.5s ease-in-out infinite 0s;\n\t\tstroke-dasharray: 1, 400;\n\t\tstroke-dashoffset: 0;\n\t}\n\t.hutz-loader-icon { animation: rotate 1.5s linear infinite; }\n'.replace(/\n/g, '').replace(/\s\s+/g, ' ');

var style = function style(size, color) {
	return {
		container: {
			width: size || 50,
			height: size || 50
		},
		circle: {
			strokeDashoffset: 0,
			strokeLinecap: 'round',
			fill: 'none',
			strokeWidth: 3,
			stroke: _colors2.default[color] || color
		}
	};
};