'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function InputText(_ref) {
	var defaultValue = _ref.defaultValue;
	var placeHolder = _ref.placeHolder;

	var props = _objectWithoutProperties(_ref, ['defaultValue', 'placeHolder']);

	return _react2.default.createElement('input', _extends({
		defaultValue: defaultValue,
		placeholder: placeHolder,
		type: 'text'
	}, props));
}

InputText.propTypes = {
	defaultValue: _react.PropTypes.string,
	placeHolder: _react.PropTypes.string
};

exports.default = (0, _radium2.default)(InputText);