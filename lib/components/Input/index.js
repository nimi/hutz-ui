'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _InputText = require('./InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _InputTextArea = require('./InputTextArea');

var _InputTextArea2 = _interopRequireDefault(_InputTextArea);

var _InputCheckbox = require('./InputCheckbox');

var _InputCheckbox2 = _interopRequireDefault(_InputCheckbox);

var _InputRange = require('./InputRange');

var _InputRange2 = _interopRequireDefault(_InputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Input(_ref) {
	var val = _ref.val,
	    error = _ref.error,
	    label = _ref.label,
	    size = _ref.size,
	    success = _ref.success,
	    type = _ref.type,
	    update = _ref.update,
	    props = _objectWithoutProperties(_ref, ['val', 'error', 'label', 'size', 'success', 'type', 'update']);

	var inputStyles = _extends({}, _styles.typeography.input, _styles.InputStyles.base, props.style);
	var iconColor = success ? _styles.InputStyles.successColor : _styles.InputStyles.errorColor;
	var containerStyles = _extends({}, _styles.InputStyles.container, {
		width: size === 'fill' ? '100%' : null
	});

	var inputContainerStyles = _extends({}, _styles.InputStyles.inputContainer);

	inputContainerStyles = error ? _extends({}, inputContainerStyles, _styles.InputStyles.error) : inputContainerStyles;

	inputContainerStyles = success ? _extends({}, inputContainerStyles, _styles.InputStyles.success) : inputContainerStyles;

	inputContainerStyles = type === 'textarea' ? _extends({}, inputContainerStyles, _styles.InputStyles.textarea) : inputContainerStyles;

	inputContainerStyles = type === 'range' ? _extends({}, inputContainerStyles, _styles.InputStyles.range) : inputContainerStyles;

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			fill: false
		}, props, {
			className: this.props.className || 'hutz-input'
		}),
		_react2.default.createElement(
			'div',
			{ style: containerStyles },
			!label ? null : _react2.default.createElement(
				'label',
				{ style: _styles.InputStyles.label },
				label
			),
			_react2.default.createElement(
				'div',
				{ style: inputContainerStyles },
				function () {
					switch (type) {
						case 'textarea':
							return _react2.default.createElement(_InputTextArea2.default, _extends({}, props, { style: inputStyles }));
						case 'checkbox':
							return _react2.default.createElement(_InputCheckbox2.default, _extends({}, props, { style: inputStyles }));
						case 'range':
							return _react2.default.createElement(_InputRange2.default, props);
						default:
							return _react2.default.createElement(_InputText2.default, _extends({}, props, { style: inputStyles }));
					}
				}()
			),
			!success && !error ? null : _react2.default.createElement(
				_Container2.default,
				{
					fill: false,
					style: _styles.InputStyles.icon,
					update: update
				},
				_react2.default.createElement(_Icon2.default, { type: 'check', color: iconColor })
			)
		)
	);
}

Input.displayName = 'Input';

Input.propTypes = {
	defaultValue: _react.PropTypes.string,
	error: _react.PropTypes.bool,
	label: _react.PropTypes.string,
	placeHolder: _react.PropTypes.string,
	size: _react.PropTypes.string,
	success: _react.PropTypes.bool,
	type: _react.PropTypes.string,
	value: _react.PropTypes.number
};

Input.defaultProps = {
	type: 'text'
};

exports.default = Input;