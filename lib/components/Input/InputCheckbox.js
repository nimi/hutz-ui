'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function InputCheckbox(_ref) {
	var checked = _ref.checked;

	var props = _objectWithoutProperties(_ref, ['checked']);

	return _react2.default.createElement('input', _extends({
		checked: checked,
		type: 'checkbox'
	}, props));
}

InputCheckbox.propTypes = {
	checked: _react.PropTypes.bool,
	style: _react.PropTypes.object
};

InputCheckbox.defaultProps = {
	checked: false
};

exports.default = InputCheckbox;