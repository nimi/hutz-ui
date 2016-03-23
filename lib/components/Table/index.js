'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

var _TableHead = require('./TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Table(_ref) {
	var headings = _ref.headings;
	var data = _ref.data;
	var number = _ref.number;

	var props = _objectWithoutProperties(_ref, ['headings', 'data', 'number']);

	if (!data) {
		return _react2.default.createElement(
			'span',
			null,
			'No data to display'
		);
	}

	var tableHeadings = !number ? headings : ['#'].concat(headings);
	var tableRows = !number ? data : data.map(function (d, i) {
		return [i + 1].concat(d);
	});

	var styles = Object.assign({}, props.style);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			fill: false,
			style: styles
		}, props),
		_react2.default.createElement(
			_Container2.default,
			{
				tagName: 'table',
				style: style.base
			},
			_react2.default.createElement(_TableHead2.default, { data: tableHeadings }),
			_react2.default.createElement(_TableBody2.default, { data: tableRows, number: number })
		)
	);
}

Table.displayName = 'Table';

Table.propTypes = {};

exports.default = Table;

var style = {
	base: {
		borderCollapse: 'collapse',
		lineHeight: 1.5,
		fontSize: 14
	},
	head: {
		fontSize: 14
	}
};