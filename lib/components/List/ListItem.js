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

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ListItem(_ref) {
	var icon = _ref.icon;
	var inline = _ref.inline;
	var px = _ref.px;
	var py = _ref.py;
	var fill = _ref.fill;

	var props = _objectWithoutProperties(_ref, ['icon', 'inline', 'px', 'py', 'fill']);

	var listItemStyle = style(fill);
	var styles = _extends({}, listItemStyle, {
		paddingTop: py ? _styles.scale[py] : null,
		paddingBottom: py ? _styles.scale[py] : null,
		paddingLeft: px ? _styles.scale[px] : null,
		paddingRight: px ? _styles.scale[px] : null
	});

	return _react2.default.createElement('li', _extends({ style: styles }, props));
}

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
	fill: _react.PropTypes.bool,
	icon: _react.PropTypes.bool,
	inline: _react.PropTypes.bool
};

ListItem.defaultProps = {
	fill: true
};

exports.default = (0, _radium2.default)(ListItem);

var style = function style(fill) {
	return {
		display: 'block',
		minWidth: 0,
		minHeight: 0,
		verticalAlign: 'middle',
		flex: fill ? '1 1 auto' : null
	};
};