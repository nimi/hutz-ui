'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexBox = require('../FlexBox');

var _FlexBox2 = _interopRequireDefault(_FlexBox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Alert(_ref) {
	var message = _ref.message,
	    type = _ref.type,
	    close = _ref.close,
	    className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['message', 'type', 'close', 'className']);

	var backgroundColor = _styles.typeColor[type] || 'blue';
	var color = props.color || 'white';
	var styles = Object.assign({}, style, props.style);

	return _react2.default.createElement(
		_FlexBox2.default,
		_extends({
			className: className || 'hutz-alert',
			align: 'center',
			color: color,
			backgroundColor: backgroundColor,
			px: 2,
			py: 1,
			style: styles
		}, props),
		_react2.default.createElement(
			'span',
			{ style: { margin: 'auto 0' } },
			message
		),
		_react2.default.createElement('span', { style: { margin: 'auto' } }),
		_react2.default.createElement(
			'span',
			{ style: { cursor: 'pointer' } },
			_react2.default.createElement(_Icon2.default, { type: 'close', color: color, onClick: close })
		)
	);
}

Alert.displayName = 'Alert';

Alert.propTypes = {
	close: _react.PropTypes.func,
	message: _react.PropTypes.string,
	type: _react.PropTypes.oneOf(['primary', 'warning', 'success', 'error'])
};

exports.default = Alert;


var style = {
	fontSize: 16,
	height: 45
};