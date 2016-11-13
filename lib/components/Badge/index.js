'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Badge(_ref) {
	var backgroundColor = _ref.backgroundColor,
	    color = _ref.color,
	    round = _ref.round,
	    circle = _ref.circle,
	    pill = _ref.pill,
	    className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['backgroundColor', 'color', 'round', 'circle', 'pill', 'className']);

	return _react2.default.createElement(_Container2.default, _extends({
		color: color || 'white',
		backgroundColor: backgroundColor || 'blue',
		round: round,
		circle: circle || pill,
		px: !circle ? 1 : null,
		style: badgeStyle({ circle: circle }),
		className: className || 'hutz-badge'
	}, props));
}

exports.default = Badge;


Badge.displayName = 'Badge';

Badge.propTypes = {
	backgroundColor: _react.PropTypes.string,
	circle: _react.PropTypes.bool,
	color: _react.PropTypes.string,
	round: _react.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])])
};

var badgeStyle = function badgeStyle(_ref2) {
	var circle = _ref2.circle;
	return {
		alignItems: 'center',
		display: 'inline-flex',
		fontSize: 12,
		fontWeight: 600,
		height: 25,
		justifyContent: 'center',
		width: circle ? 25 : null
	};
};