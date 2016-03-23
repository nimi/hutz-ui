'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Divider(_ref) {
	var vertical = _ref.vertical;
	var _ref$style = _ref.style;
	var style = _ref$style === undefined ? {} : _ref$style;

	var props = _objectWithoutProperties(_ref, ['vertical', 'style']);

	return _react2.default.createElement(_Container2.default, _extends({}, props, {
		style: _extends({}, dividerStyle, style),
		tagName: 'hr'
	}));
}

Divider.displayName = 'Divider';

Divider.propTypes = {
	vertical: _react.PropTypes.bool
};

Divider.defaultProps = {
	vertical: false
};

exports.default = Divider;

var dividerStyle = {
	backgroundColor: _colors2.default.gray,
	border: 'none',
	height: 1,
	marginLeft: 0,
	marginTop: -1
};