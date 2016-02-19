'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardText(_ref) {
	var t = _ref.t;

	return _react2.default.createElement(
		_Container2.default,
		{ px: 2, py: 1 },
		_react2.default.createElement(_Text2.default, { content: t })
	);
}

exports.default = CardText;