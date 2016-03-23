'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _icons = require('../../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Icon(_ref) {
	var size = _ref.size;
	var type = _ref.type;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['size', 'type', 'color']);

	var icon = _icons2.default.get(type);
	var s = size || 25;

	return _react2.default.createElement(
		'svg',
		_extends({
			height: '100%',
			preserveAspectRatio: 'xMidYMid meet',
			viewBox: '0 0 ' + s + ' ' + s,
			stroke: color || 'black',
			fill: color || 'black',
			style: _extends({ height: s + 'px', width: s + 'px' }, props.style),
			width: '100%'
		}, props),
		(function () {
			return props.children ? props.children : _react2.default.createElement(
				'g',
				{ id: type },
				_react2.default.createElement('path', { d: icon })
			);
		})()
	);
}

exports.default = (0, _radium2.default)(Icon);

Icon.displayName = 'Icon';

Icon.propTypes = {
	color: _react.PropTypes.string,
	size: _react.PropTypes.number,
	type: _react.PropTypes.string
};