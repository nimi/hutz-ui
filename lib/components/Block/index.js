'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Block(props) {
	var borderColor = _styles.colors[props.borderColor] ? _styles.colors[props.borderColor] : props.borderColor;

	var styles = Object.assign({}, style(_extends({}, props, { borderColor: borderColor })), props.style);

	return _react2.default.createElement(_Container2.default, _extends({
		style: styles,
		my: 2
	}, props));
}

Block.displayName = 'Block';

Block.propTypes = {
	borderBottom: _react.PropTypes.bool,
	borderColor: _react.PropTypes.string,
	borderLeft: _react.PropTypes.bool,
	borderRight: _react.PropTypes.bool,
	borderTop: _react.PropTypes.bool,
	borderWidth: _react.PropTypes.number
};

exports.default = Block;

var style = function style(props) {
	return {
		borderBottomStyle: props.borderBottom ? 'solid' : null,
		borderColor: props.borderColor || _styles.colors.blue,
		borderLeftStyle: props.borderLeft ? 'solid' : null,
		borderRightStyle: props.borderRight ? 'solid' : null,
		borderTopStyle: props.borderTop ? 'solid' : null,
		borderWidth: props.borderWidth || 4
	};
};