'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Dialog(_ref) {
	var open = _ref.open;
	var backdropColor = _ref.backdropColor;
	var onClose = _ref.onClose;
	var fill = _ref.fill;

	var props = _objectWithoutProperties(_ref, ['open', 'backdropColor', 'onClose', 'fill']);

	var _style = style({ open: open, backdropColor: backdropColor, fill: fill });

	var container = _style.container;
	var backdrop = _style.backdrop;
	var inner = _style.inner;

	var innerStyle = Object.assign({}, inner, props.style);

	return _react2.default.createElement(
		_Container2.default,
		{
			fill: false,
			style: container
		},
		_react2.default.createElement(_Container2.default, {
			fill: false,
			onClick: onClose,
			style: backdrop
		}),
		_react2.default.createElement(_Container2.default, _extends({
			fill: false,
			style: innerStyle
		}, props))
	);
}

Dialog.displayName = 'Dialog';

Dialog.propTypes = {};

exports.default = Dialog;


var style = function style(_ref2) {
	var _ref2$open = _ref2.open;
	var open = _ref2$open === undefined ? true : _ref2$open;
	return {
		container: {
			position: 'fixed',
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			zIndex: _styles.zIndex[3],
			display: open ? 'flex' : 'none',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center'
		},
		backdrop: {
			position: 'fixed',
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			backgroundColor: _styles.colors.black,
			opacity: 0.8
		},
		inner: {
			position: 'relative',
			zIndex: _styles.zIndex[2],
			minWidth: 320
		}
	};
};