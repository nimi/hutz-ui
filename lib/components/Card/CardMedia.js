'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Media = require('../Media');

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardMedia(_ref) {
	var s = _ref.s;

	return _react2.default.createElement(
		_Container2.default,
		null,
		_react2.default.createElement(_Media2.default, { src: s })
	);
}

exports.default = CardMedia;