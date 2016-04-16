'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('../../styles');

var _List = require('../List');

var _List2 = _interopRequireDefault(_List);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Menu(_ref) {
	var align = _ref.align;
	var fill = _ref.fill;
	var inline = _ref.inline;
	var type = _ref.type;
	var activeIndex = _ref.activeIndex;
	var px = _ref.px;
	var py = _ref.py;
	var menuItemStyle = _ref.menuItemStyle;
	var backgroundColor = _ref.backgroundColor;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['align', 'fill', 'inline', 'type', 'activeIndex', 'px', 'py', 'menuItemStyle', 'backgroundColor', 'color']);

	var styles = _extends({}, style.list);

	styles = inline ? _extends({}, styles, style.inline) : style;

	return _react2.default.createElement(
		_List2.default,
		_extends({}, props, {
			inline: inline,
			fill: fill,
			px: px || 0,
			py: py || 0,
			itemStyle: menuItemStyle,
			style: props.style
		}),
		_react2.default.Children.map(props.children, function (child, i) {
			if (child.type.displayName === 'Divider') {
				return _react2.default.cloneElement(child, _extends({
					key: i
				}, child.props));
			} else {
				return _react2.default.createElement(
					_MenuItem2.default,
					_extends({
						type: type,
						active: i === activeIndex
					}, child.props, {
						key: i,
						backgroundColor: backgroundColor,
						color: color
					}),
					_react2.default.cloneElement(child, _extends({}, child.props, { key: i }))
				);
			}
		})
	);
}

Menu.displayName = 'Menu';

Menu.propTypes = {
	fill: _react.PropTypes.bool,
	inline: _react.PropTypes.bool,
	menuItemStyle: _react.PropTypes.object
};

exports.default = (0, _radium2.default)(Menu);


var style = {
	list: {
		color: (0, _styles.colors)('gray', 5),
		fontSize: _styles.typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%'
	},
	inline: {
		display: 'inline-flex'
	}
};