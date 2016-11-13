'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = TableHead;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TableHead(_ref) {
	var data = _ref.data,
	    props = _objectWithoutProperties(_ref, ['data']);

	var renderHeading = function renderHeading(heading, i) {
		return _react2.default.createElement('th', {
			key: i,
			children: heading,
			style: style.base
		});
	};

	return _react2.default.createElement(
		'thead',
		props,
		_react2.default.createElement(
			'tr',
			null,
			data.map(renderHeading)
		)
	);
}

var style = {
	base: {
		borderBottom: '2px solid ' + _styles.colors.gray,
		lineHeight: 1.5,
		padding: 8,
		textAlign: 'left',
		verticalAlign: 'bottom'
	}
};