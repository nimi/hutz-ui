'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabPanelHeader = require('./TabPanelHeader');

var _TabPanelHeader2 = _interopRequireDefault(_TabPanelHeader);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TabPanel(_ref) {
	var activeIndex = _ref.activeIndex,
	    backgroundColor = _ref.backgroundColor,
	    color = _ref.color,
	    children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['activeIndex', 'backgroundColor', 'color', 'children']);

	var styles = Object.assign({}, style, props.style);

	var activePanel = _react.Children.map(children, function (panel, i) {
		if (activeIndex === i) {
			return (0, _react.cloneElement)(panel, _extends({
				key: i
			}, panel.props));
		}
	}).filter(function (p) {
		return Boolean(p);
	});

	var headerProps = _react.Children.map(children, function (_ref2) {
		var props = _ref2.props;
		return props;
	});

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			style: styles
		}, props, {
			className: this.props.className || 'hutz-tabpanel'
		}),
		_react2.default.createElement(_TabPanelHeader2.default, {
			headerProps: headerProps,
			activeIndex: activeIndex,
			backgroundColor: backgroundColor,
			color: color
		}),
		activePanel
	);
}

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = {
	activeIndex: _react.PropTypes.number
};

exports.default = TabPanel;


var style = {};