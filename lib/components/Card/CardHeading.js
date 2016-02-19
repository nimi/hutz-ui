'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardHeading(_ref) {
	var t = _ref.t;
	var s = _ref.s;

	return _react2.default.createElement(
		_Container2.default,
		{ p: 2 },
		_react2.default.createElement(_Heading2.default, { size: 3, content: t, style: { margin: '0.25em 0' } }),
		(function () {
			return Boolean(s) ? _react2.default.createElement(_Heading2.default, { size: 4, content: s, style: { margin: '0.5em 0' } }) : null;
		})()
	);
}

exports.default = CardHeading;