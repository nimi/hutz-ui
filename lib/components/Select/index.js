'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Select(_ref) {
	var col = _ref.col,
	    label = _ref.label,
	    name = _ref.name,
	    options = _ref.options,
	    props = _objectWithoutProperties(_ref, ['col', 'label', 'name', 'options']);

	var opts = options.map(function (o, i) {
		return _react2.default.createElement(
			'option',
			_extends({ key: i }, o),
			o.label
		);
	});

	return _react2.default.createElement(
		_Container2.default,
		{ col: col },
		_react2.default.createElement(
			'label',
			{
				htmlFor: name,
				style: style.label
			},
			label
		),
		_react2.default.createElement(
			'select',
			_extends({
				style: style.select
			}, props),
			opts
		)
	);
}

Select.displayName = 'Select';

Select.propTypes = {
	label: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired,
	options: _react.PropTypes.array.isRequired
};

exports.default = Select;


var style = {
	select: {
		backgroundColor: (0, _styles.colors)('gray', 1),
		color: (0, _styles.colors)('gray', 5),
		height: '2.5rem',
		fontSize: _styles.typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
		':hover': {
			backgroundColor: (0, _styles.colors)('gray', 2)
		}
	},
	label: _styles.InputStyles.labelStyle
};