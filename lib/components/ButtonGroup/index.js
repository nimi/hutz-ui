'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ButtonGroup(_ref) {
	var children = _ref.children,
	    vertical = _ref.vertical,
	    props = _objectWithoutProperties(_ref, ['children', 'vertical']);

	var buttonGroupStyle = bgStyle(vertical);
	var buttonStyle = bStyle(vertical);
	var firstButtonRadius = vertical ? '3px 3px 0 0' : '3px 0 0 3px';
	var lastButtonRadius = vertical ? '0 0 3px 3px' : '0 3px 3px 0';

	return _react2.default.createElement(
		_Container2.default,
		_extends({}, props, {
			className: props.className || 'hutz-buttongroup',
			style: buttonGroupStyle
		}),
		_react.Children.map(children, function (button, i) {
			var first = i === 0 ? { borderRadius: firstButtonRadius } : {};
			var last = i === children.length - 1 ? { borderRadius: lastButtonRadius } : {};
			var groupStyle = _extends({}, first, last);
			return (0, _react.cloneElement)(button, { groupStyle: _extends({}, buttonStyle, groupStyle) });
		})
	);
}

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
	children: _react.PropTypes.node,
	vertical: _react.PropTypes.bool
};

exports.default = ButtonGroup;


var bgStyle = function bgStyle(vertical) {
	return {
		width: 'initial',
		maxWidth: vertical ? '16em' : null
	};
};

var bStyle = function bStyle(vertical) {
	return {
		display: vertical ? 'block' : 'inline-block',
		marginTop: vertical ? 1 : null,
		marginLeft: !vertical ? 1 : null,
		borderRadius: 'none',
		width: vertical ? '100%' : null
	};
};