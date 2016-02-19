'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

var _pure = require('../../decorators/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Fill(_ref) {
	var val = _ref.val;
	var valLimit = _ref.valLimit;
	var offset = _ref.offset;
	var max = _ref.max;
	var min = _ref.min;
	var horizontal = _ref.horizontal;

	var position = getPositionFromValue(val, valLimit, max, min);
	var fillStyle = {
		width: horizontal ? position + offset : '100%',
		height: horizontal ? '100%' : position + offset,
		background: '#333',
		borderRadius: 10,
		position: 'absolute',
		bottom: horizontal ? null : 0
	};

	return _react2.default.createElement('div', { style: fillStyle });
}

Fill.propTypes = {
	horizontal: _react.PropTypes.bool,
	max: _react.PropTypes.number,
	min: _react.PropTypes.number,
	offset: _react.PropTypes.number.isRequired,
	valLimit: _react.PropTypes.number.isRequired
};

Fill.defaultProps = {
	horizontal: true
};

function Slider(_ref2) {
	var val = _ref2.val;
	var active = _ref2.active;
	var update = _ref2.update;
	var size = _ref2.size;
	var valLimit = _ref2.valLimit;
	var max = _ref2.max;
	var min = _ref2.min;
	var step = _ref2.step;
	var horizontal = _ref2.horizontal;

	var position = getPositionFromValue(val, valLimit, max, min);
	var handleStyle = {
		left: horizontal ? position : -(size / 2),
		width: size,
		height: size,
		borderRadius: size,
		top: horizontal ? -(size / 2) : valLimit - position,
		background: '#333',
		border: '1px solid #333',
		display: 'inline-block',
		position: 'absolute'
	};

	var dragEnd = function dragEnd(e) {
		e.preventDefault();
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', dragEnd);
	};

	var handleMouseMove = undefined;

	return _react2.default.createElement('div', {
		style: handleStyle,
		onMouseDown: function onMouseDown(e) {
			var parent = e.target.parentNode.getBoundingClientRect();
			var direction = horizontal ? parent.left : parent.top;
			handleMouseMove = function (event) {
				var coordinate = horizontal ? event.clientX : event.clientY;

				var value = getValueFromPosition(coordinate - direction - size / 2, valLimit, max, min, step, horizontal);
				event.preventDefault();
				update(value, event);
			};

			e.preventDefault();

			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', dragEnd);
		}
	});
}

Slider.propTypes = {
	horizontal: _react.PropTypes.bool,
	size: _react.PropTypes.number.isRequired,
	valLimit: _react.PropTypes.number.isRequired
};

Slider.defaultProps = {
	horizontal: true
};

function InputRange(_ref3) {
	var max = _ref3.max;
	var min = _ref3.min;
	var step = _ref3.step;
	var val = _ref3.val;
	var orient = _ref3.orient;
	var update = _ref3.update;
	var active = _ref3.active;
	var width = _ref3.width;
	var height = _ref3.height;

	var props = _objectWithoutProperties(_ref3, ['max', 'min', 'step', 'val', 'orient', 'update', 'active', 'width', 'height']);

	var horiz = orient === 'horizontal';
	var sliderStyle = {
		background: '#e6e6e6',
		borderRadius: 10,
		display: 'block',
		height: horiz ? 2 : height,
		margin: '20px 0',
		position: 'relative',
		width: '100%',
		maxWidth: horiz ? width : 2,
		cursor: 'pointer'
	};

	var valLimit = horiz ? width - 12 : height - 12;

	return _react2.default.createElement(
		'div',
		_extends({}, props, {
			style: sliderStyle,
			onClick: function onClick() {}
		}),
		_react2.default.createElement(Fill, {
			offset: 12 / 2,
			valLimit: valLimit,
			update: update,
			val: val,
			min: min,
			max: max,
			horizontal: horiz
		}),
		_react2.default.createElement(Slider, {
			valLimit: valLimit,
			size: 12,
			val: val,
			update: update,
			active: active,
			max: max,
			min: min,
			step: step,
			horizontal: horiz
		})
	);
}

InputRange.propTypes = {
	max: _react.PropTypes.number,
	min: _react.PropTypes.number,
	orient: _react.PropTypes.string,
	step: _react.PropTypes.number,
	update: _react.PropTypes.func,
	val: _react.PropTypes.number,
	width: _react.PropTypes.number
};

InputRange.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	val: 0,
	orient: 'horizontal',
	width: 300,
	height: 150
};

function getPositionFromValue(value, valueLimit, max, min) {
	var percentage = (value - min) / (max - min);
	return Math.round(percentage * valueLimit);
}

function getValueFromPosition(pos, posLimit, max, min, step, horizontal) {
	var percentage = (0, _utils.maxmin)(pos, 0, posLimit) / (posLimit || 1);
	return horizontal ? step * Math.round(percentage * (max - min) / step) + min : max - (step * Math.round(percentage * (max - min) / step) + min);
}

exports.default = (0, _pure2.default)(InputRange);