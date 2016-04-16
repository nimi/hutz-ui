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

function Tab(_ref) {
	var _ref$activeIndex = _ref.activeIndex;
	var activeIndex = _ref$activeIndex === undefined ? 2 : _ref$activeIndex;
	var children = _ref.children;

	var props = _objectWithoutProperties(_ref, ['activeIndex', 'children']);

	var styles = Object.assign({}, style, props.style);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			style: styles
		}, props),
		children
	);
}

Tab.displayName = 'Tab';

Tab.propTypes = {};

exports.default = Tab;


var style = {};