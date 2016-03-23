'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Media = require('../Media');

var _Media2 = _interopRequireDefault(_Media);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Avatar(_ref) {
	var src = _ref.src;
	var icon = _ref.icon;
	var letter = _ref.letter;
	var size = _ref.size;
	var color = _ref.color;
	var align = _ref.align;
	var name = _ref.name;
	var backgroundColor = _ref.backgroundColor;

	var props = _objectWithoutProperties(_ref, ['src', 'icon', 'letter', 'size', 'color', 'align', 'name', 'backgroundColor']);

	var nameAlign = name && ('left' || align);

	var _avatarStyle = avatarStyle({ src: src, nameAlign: nameAlign, backgroundColor: backgroundColor });

	var containerStyle = _avatarStyle.containerStyle;
	var nameStyle = _avatarStyle.nameStyle;

	var child = Boolean(src) ? _react2.default.createElement(_Media2.default, { src: src }) : icon ? _react2.default.createElement(_Icon2.default, { type: icon, color: color, size: 22 }) : _react2.default.createElement(
		'span',
		null,
		letter
	);

	return _react2.default.createElement(
		_Container2.default,
		{ fill: false },
		nameAlign === 'right' ? _react2.default.createElement(
			'span',
			{ style: nameStyle },
			name
		) : null,
		_react2.default.createElement(
			_Container2.default,
			{ style: _extends({}, containerStyle, props.style) },
			_react2.default.cloneElement(child, {})
		),
		nameAlign === 'left' ? _react2.default.createElement(
			'span',
			{ style: nameStyle },
			name
		) : null
	);
}

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
	align: _react.PropTypes.string,
	backgroundColor: _react.PropTypes.string,
	color: _react.PropTypes.string,
	icon: _react.PropTypes.string,
	letter: _react.PropTypes.string,
	name: _react.PropTypes.string,
	size: _react.PropTypes.number,
	src: _react.PropTypes.string
};

exports.default = Avatar;

var avatarStyle = function avatarStyle(_ref2) {
	var src = _ref2.src;
	var nameAlign = _ref2.nameAlign;
	var _ref2$backgroundColor = _ref2.backgroundColor;
	var backgroundColor = _ref2$backgroundColor === undefined ? 'blue' : _ref2$backgroundColor;
	return {
		containerStyle: {
			backgroundColor: src || !backgroundColor ? null : _colors2.default[backgroundColor],
			color: 'white',
			position: 'relative',
			borderRadius: '50%',
			display: 'inline-block',
			fontSize: '1.75em',
			lineHeight: '1.75em',
			height: '40px',
			overflow: 'hidden',
			textAlign: 'center',
			width: '40px'
		},
		nameStyle: {
			fontSize: '1.25em',
			lineHeight: '40px',
			verticalAlign: 'top',
			display: 'inline-block',
			paddingLeft: nameAlign === 'left' ? '20px' : null,
			paddingRight: nameAlign === 'right' ? null : '20px'
		}
	};
};