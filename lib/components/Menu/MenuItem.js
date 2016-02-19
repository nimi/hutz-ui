'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function MenuItem(_ref) {
	var icon = _ref.icon;
	var name = _ref.name;
	var active = _ref.active;
	var type = _ref.type;

	var props = _objectWithoutProperties(_ref, ['icon', 'name', 'active', 'type']);

	var baseStyle = _extends({}, (0, _styles.buttonStyles)().initialStyle, style.menuItem);
	var typeStyleMap = new Map([[1, _extends({}, baseStyle)], [2, _extends({}, baseStyle, { border: null })], [3, _extends({}, baseStyle, {
		border: null,
		boxShadow: 'inset -2px 0 0 ' + _styles.colors.gray,
		':hover': { textDecoration: 'none' },
		':active': null,
		':focus': {
			boxShadow: 'inset -2px 0 0 ' + _styles.colors.black,
			fontWeight: 600
		}
	})]]);

	var itemStyle = type ? typeStyleMap.get(type) : typeStyleMap.get(1);

	var menuItemStyle = active ? _extends({}, itemStyle, style.activeMenuItem) : itemStyle;

	return _react2.default.createElement(
		'span',
		null,
		_react2.default.Children.map(props.children, function (c, i) {
			return _react2.default.cloneElement(c, {
				style: _extends({}, menuItemStyle, props.style)
			});
		})
	);
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
	icon: _react.PropTypes.bool,
	inline: _react.PropTypes.bool
};

exports.default = (0, _radium2.default)(MenuItem);

var style = {
	menuItem: {
		textAlign: null,
		borderRadius: 'none',
		height: 'inherit',
		boxSizing: 'border-box',
		display: 'block'
	},
	activeMenuItem: _extends({}, (0, _styles.buttonStyles)().initialStyle[':active'])
};