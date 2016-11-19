'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function List(_ref) {
	var col = _ref.col,
	    fill = _ref.fill,
	    inline = _ref.inline,
	    px = _ref.px,
	    py = _ref.py,
	    itemStyle = _ref.itemStyle,
	    props = _objectWithoutProperties(_ref, ['col', 'fill', 'inline', 'px', 'py', 'itemStyle']);

	var styles = _extends({}, style.list, {
		textAlign: inline ? 'center' : null
	});

	styles = inline ? _extends({}, styles, style.inline) : styles;

	return _react2.default.createElement(
		_Container2.default,
		{
			col: col,
			style: props.style || null,
			className: this.props.className || 'hutz-list'
		},
		_react2.default.createElement(
			'ul',
			{ style: [styles] },
			_react2.default.Children.map(props.children, function (listItem, i) {
				return _react2.default.createElement(
					_ListItem2.default,
					{ fill: fill, inline: inline, px: px, py: py, key: i, style: itemStyle },
					listItem
				);
			})
		)
	);
}

List.displayName = 'List';

List.propTypes = {
	inline: _react.PropTypes.bool,
	itemStyle: _react.PropTypes.object
};

exports.default = List;


var style = {
	list: {
		color: (0, _styles.colors)('gray', 5),
		fontSize: _styles.typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
		margin: 0,
		padding: 0,
		appearance: 'none',
		WebkitAppearance: 'none'
	},
	inline: {
		display: 'inline-flex'
	}
};