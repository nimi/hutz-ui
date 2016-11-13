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

function ListItem(_ref) {
	var px = _ref.px,
	    py = _ref.py,
	    fill = _ref.fill,
	    inline = _ref.inline,
	    _ref$style = _ref.style,
	    style = _ref$style === undefined ? {} : _ref$style,
	    props = _objectWithoutProperties(_ref, ['px', 'py', 'fill', 'inline', 'style']);

	var listItemStyle = listStyle(fill, inline);
	var styles = _extends({}, listItemStyle, {
		paddingTop: py ? _styles.scale[py] : null,
		paddingBottom: py ? _styles.scale[py] : null,
		paddingLeft: px ? _styles.scale[px] : null,
		paddingRight: px ? _styles.scale[px] : null
	}, style);

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

exports.default = ListItem;


var listStyle = function listStyle(fill, inline) {
	return {
		display: inline ? 'inline-block' : 'block',
		minWidth: 0,
		minHeight: 0,
		verticalAlign: 'middle',
		flex: fill ? '1 1 auto' : null
	};
};