'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button(_ref) {
	var bt = _ref.bt,
	    color = _ref.color,
	    disabled = _ref.disabled,
	    groupStyle = _ref.groupStyle,
	    href = _ref.href,
	    size = _ref.size,
	    props = _objectWithoutProperties(_ref, ['bt', 'color', 'disabled', 'groupStyle', 'href', 'size']);

	var Component = Boolean(href) ? 'a' : 'button';

	var _buttonStyles = (0, _styles.buttonStyles)(color),
	    initialStyle = _buttonStyles.initialStyle,
	    disabledStyle = _buttonStyles.disabledStyle,
	    fillStyle = _buttonStyles.fillStyle,
	    raisedStyle = _buttonStyles.raisedStyle,
	    outlineStyle = _buttonStyles.outlineStyle,
	    linkStyle = _buttonStyles.linkStyle;

	var styles = [initialStyle];

	if (disabled) {
		styles.push(disabledStyle);
	}
	if (size) {
		styles.push(fillStyle);
	}
	if (groupStyle) {
		styles.push(groupStyle);
	}
	if (bt === 'raised') {
		styles.push(raisedStyle);
	}
	if (bt === 'outline') {
		styles.push(outlineStyle);
	}
	if (bt === 'link') {
		styles.push(linkStyle);
	}
	if (props.style) {
		styles.push(props.style);
	}

	var style = Object.assign.apply(Object, styles);

	return _react2.default.createElement(Component, _extends({}, props, {
		href: href,
		style: style,
		Classname: props.className || 'hutz-button'
	}));
}

exports.default = Button;


Button.displayName = 'Button';

Button.propTypes = {
	bt: _react.PropTypes.string,
	color: _react.PropTypes.string,
	disabled: _react.PropTypes.bool,
	groupStyle: _react.PropTypes.object,
	size: _react.PropTypes.string
};