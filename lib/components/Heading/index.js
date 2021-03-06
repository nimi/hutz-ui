'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Heading(_ref) {
	var size = _ref.size,
	    content = _ref.content,
	    props = _objectWithoutProperties(_ref, ['size', 'content']);

	var el = elMap.get(size);
	var style = headingStyle(props, size);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			tagName: el,
			style: _extends({}, style, props.style)
		}, props, {
			className: props.className || 'hutz-heading'
		}),
		content || props.children
	);
}

Heading.displayName = 'Heading';

Heading.propTypes = {
	size: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	caps: _react.PropTypes.bool,
	center: _react.PropTypes.bool,
	color: _react.PropTypes.string,
	content: _react.PropTypes.string
};

Heading.defaultProps = {
	size: 1
};

exports.default = Heading;


var elMap = new Map([[1, 'h1'], [2, 'h2'], [3, 'h3'], [4, 'h4'], [5, 'h5'], [6, 'h6']]);

var headingStyle = function headingStyle(_ref2, size) {
	var center = _ref2.center,
	    caps = _ref2.caps,
	    color = _ref2.color;
	return _extends({
		textAlign: center ? 'center' : null,
		textTransform: caps ? 'uppercase' : null,
		letterSpacing: caps ? '0.425em' : null,
		fontWeight: size === 1 ? 100 : 400,
		color: color ? _styles.colors[color] : null,
		margin: '1em 0'
	}, _styles.typeography['heading' + size]);
};