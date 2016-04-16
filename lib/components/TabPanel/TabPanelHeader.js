'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TabPanelHeader(_ref) {
	var headerProps = _ref.headerProps;
	var activeIndex = _ref.activeIndex;
	var backgroundColor = _ref.backgroundColor;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['headerProps', 'activeIndex', 'backgroundColor', 'color']);

	var styles = Object.assign({}, style, props.style);

	var tabs = headerProps.map(function (ps, i) {
		return _react2.default.createElement(
			_Button2.default,
			_extends({ key: i }, ps),
			ps.label
		);
	});

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			style: styles
		}, props),
		_react2.default.createElement(
			_Menu2.default,
			{
				activeIndex: activeIndex,
				inline: true,
				type: 2,
				backgroundColor: backgroundColor,
				color: color
			},
			tabs
		)
	);
}

TabPanelHeader.displayName = 'TabPanelHeader';

TabPanelHeader.propTypes = {};

exports.default = TabPanelHeader;


var style = {};