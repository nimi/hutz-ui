'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createElement;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFunctionComponent = require('../utils/isFunctionComponent');

var _isFunctionComponent2 = _interopRequireDefault(_isFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElement(Component, props, children) {
	if (!props.hasKey && (0, _isFunctionComponent2.default)(Component)) {
		return children ? Component(_extends({}, props, { children: children })) : Component(props);
	}

	return children ? _react2.default.createElement(
		Component,
		props,
		children
	) : _react2.default.createElement(Component, props);
}