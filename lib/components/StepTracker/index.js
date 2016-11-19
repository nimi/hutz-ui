'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _FlexBox = require('../FlexBox');

var _FlexBox2 = _interopRequireDefault(_FlexBox);

var _styles = require('../../styles');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StepTracker(_ref) {
	var steps = _ref.steps,
	    active = _ref.active,
	    props = _objectWithoutProperties(_ref, ['steps', 'active']);

	var stepItems = steps.map(function (step, i) {
		return _react2.default.createElement(_Step2.default, _extends({
			key: i,
			first: i === 0,
			width: 100 / steps.length + '%',
			active: i <= active
		}, step));
	});
	var styles = Object.assign({}, style, props.style);

	return _react2.default.createElement(
		_FlexBox2.default,
		_extends({
			align: 'flex-start',
			justify: 'space-between',
			style: styles
		}, props, {
			className: this.props.className || 'hutz-steptracker'
		}),
		stepItems
	);
}

StepTracker.displayName = 'StepTracker';

StepTracker.propTypes = {
	active: _react.PropTypes.number,
	steps: _react.PropTypes.array.isRequired
};

exports.default = StepTracker;


var style = {
	fontSize: 16,
	fontWeight: 400,
	color: _styles.colors.gray
};