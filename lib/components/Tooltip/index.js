'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Tooltip(_ref) {
	var text = _ref.text;
	var backgroundColor = _ref.backgroundColor;
	var width = _ref.width;
	var color = _ref.color;

	var props = _objectWithoutProperties(_ref, ['text', 'backgroundColor', 'width', 'color']);

	var bgc = _styles.colors[backgroundColor] || backgroundColor;
	var c = _styles.colors[color] || color;

	var _style = style({ bgc: bgc, c: c, width: width });

	var container = _style.container;
	var tooltip = _style.tooltip;
	var before = _style.before;
	var after = _style.after;
	var icon = _style.icon;

	var containerStyle = Object.assign({}, container, props.style);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			className: 'hutz-tooltip-container',
			fill: false,
			tagName: 'span',
			style: containerStyle
		}, props),
		_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
		_react2.default.createElement('span', { key: 1, style: _extends({}, tooltip, before) }),
		props.children,
		_react2.default.createElement(
			_Container2.default,
			{
				fill: false,
				tagName: 'span',
				className: 'tooltip',
				key: 2,
				style: _extends({}, tooltip, after),
				round: true
			},
			text,
			_react2.default.createElement('span', { style: icon })
		)
	);
}

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
	backgroundColor: _react.PropTypes.string,
	color: _react.PropTypes.string,
	text: _react.PropTypes.string.isRequired,
	width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

exports.default = Tooltip;

var style = function style(_ref2) {
	var _ref2$bgc = _ref2.bgc;
	var bgc = _ref2$bgc === undefined ? 'black' : _ref2$bgc;
	var _ref2$c = _ref2.c;
	var c = _ref2$c === undefined ? 'white' : _ref2$c;
	var width = _ref2.width;
	return {
		container: {
			cursor: 'default',
			display: 'inline-block',
			position: 'relative'
		},
		tooltip: {
			bottom: '100%',
			left: '50%',
			position: 'absolute',
			transform: 'translateX(-50%)',
			zIndex: _styles.zIndex[5],
			pointerEvents: 'none',
			transition: 'all 0.3s ease'
		},
		after: {
			backgroundColor: bgc,
			color: c,
			padding: '5px 12px',
			whiteSpace: !width ? 'nowrap' : null,
			width: width
		},
		before: {
			position: 'absolute',
			background: 'transparent',
			border: '6px solid transparent',
			zIndex: _styles.zIndex[6]
		},
		icon: {
			position: 'absolute',
			top: '100%',
			left: '50%',
			borderLeft: '6px solid transparent',
			borderTop: '6px solid ' + bgc,
			borderBottom: '6px solid transparent',
			borderRight: '6px solid transparent',
			transform: 'translateX(-50%)'
		}
	};
};

var css = '\n\t.hutz-tooltip-container .tooltip { visibility: hidden; opacity: 0; }\n\t.hutz-tooltip-container:hover .tooltip { visibility: visible; opacity: 1; }\n'.replace(/\n/g, '').replace(/\s\s+/g, ' ');