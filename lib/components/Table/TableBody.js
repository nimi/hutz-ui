'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = TableBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TableBody(_ref) {
	var data = _ref.data;
	var number = _ref.number;

	var props = _objectWithoutProperties(_ref, ['data', 'number']);

	var renderItem = function renderItem(item, i) {
		var Component = number && i === 0 ? 'th' : 'td';
		return _react2.default.createElement(Component, {
			style: style.base,
			key: i,
			children: item
		});
	};

	var renderRow = function renderRow(row, i) {
		return _react2.default.createElement(
			'tr',
			{ key: i },
			row.map(renderItem)
		);
	};

	return _react2.default.createElement(
		'tbody',
		props,
		data.map(renderRow)
	);
}

var style = {
	base: {
		borderTop: '1px solid ' + _styles.colors.gray,
		lineHeight: 1.5,
		padding: 8,
		textAlign: 'left',
		verticalAlign: 'top'
	}
};