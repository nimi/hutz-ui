'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexBox = require('../FlexBox');

var _FlexBox2 = _interopRequireDefault(_FlexBox);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Toolbar(_ref) {
	var props = _objectWithoutProperties(_ref, []);

	var styles = Object.assign({}, style, props.style);

	return _react2.default.createElement(_FlexBox2.default, _extends({
		align: 'center',
		className: this.props.className || 'hutz-toolbar',
		backgroundColor: props.backgroundColor || 'blue',
		px: 1,
		style: styles
	}, props));
}

Toolbar.displayName = 'Toolbar';

Toolbar.propTypes = {};

exports.default = Toolbar;


var style = {
	minHeight: 45
};