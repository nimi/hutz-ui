'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Text(_ref) {
	var small = _ref.small;
	var caps = _ref.caps;
	var center = _ref.center;
	var color = _ref.color;
	var content = _ref.content;

	var props = _objectWithoutProperties(_ref, ['small', 'caps', 'center', 'color', 'content']);

	var smallStyle = small ? _styles.typeography.small : null;

	var style = {
		textAlign: center ? 'center' : null,
		textTransform: caps ? 'uppercase' : null,
		letterSpacing: caps ? '0.125em' : null,
		color: color ? _styles.colors[color] : null
	};

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			fill: false,
			tagName: 'p',
			style: style
		}, props),
		content || props.children
	);
}

Text.displayName = 'Text';

Text.propTypes = {
	small: _react.PropTypes.bool,
	caps: _react.PropTypes.bool,
	center: _react.PropTypes.bool,
	color: _react.PropTypes.string,
	content: _react.PropTypes.string
};

exports.default = Text;