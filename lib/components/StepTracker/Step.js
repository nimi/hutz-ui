'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _FlexBox = require('../FlexBox');

var _FlexBox2 = _interopRequireDefault(_FlexBox);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Step(_ref) {
	var width = _ref.width;
	var first = _ref.first;
	var active = _ref.active;
	var activeColor = _ref.activeColor;
	var item = _ref.item;

	var props = _objectWithoutProperties(_ref, ['width', 'first', 'active', 'activeColor', 'item']);

	var _style = style({ width: width });

	var step = _style.step;
	var marker = _style.marker;
	var line = _style.line;

	var stepStyle = Object.assign({}, step, { color: active ? activeColor : null }, props.style);

	return _react2.default.createElement(
		_FlexBox2.default,
		_extends({
			px: 1,
			direction: 'column',
			align: 'center',
			style: stepStyle
		}, props),
		_react2.default.createElement(_FlexBox2.default, { fill: false, style: marker, circle: true }),
		!first && _react2.default.createElement('div', { style: line }),
		_react2.default.createElement(
			'div',
			null,
			item.name
		)
	);
}

Step.displayName = 'Step';

Step.propTypes = {
	active: _react.PropTypes.bool,
	activeColor: _react.PropTypes.string,
	first: _react.PropTypes.bool.isRequired,
	width: _react.PropTypes.string.isRequired
};

Step.defaultProps = {
	activeColor: _styles.colors.blue
};

exports.default = Step;

var style = function style(_ref2) {
	var width = _ref2.width;
	return {
		step: {
			position: 'relative',
			textDecoration: 'none',
			textAlign: 'center',
			color: 'inherit',
			lineHeight: 1.25,
			flex: '1 1 ' + width
		},
		marker: {
			position: 'relative',
			zIndex: _styles.zIndex[1],
			width: _styles.scale[2],
			height: _styles.scale[2],
			marginBottom: _styles.scale[1],
			backgroundColor: 'currentcolor'
		},
		line: {
			position: 'absolute',
			top: _styles.scale[2] / 2,
			transform: 'translate(-50%, -50%)',
			left: 0,
			right: 0,
			height: 4,
			backgroundColor: 'currentcolor'
		}
	};
};