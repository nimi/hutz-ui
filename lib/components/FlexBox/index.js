'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

var _dom = require('../../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FlexBox(_ref) {
	var width = _ref.width,
	    wrap = _ref.wrap,
	    direction = _ref.direction,
	    align = _ref.align,
	    alignItems = _ref.alignItems,
	    justify = _ref.justify,
	    gutter = _ref.gutter,
	    sm = _ref.sm,
	    md = _ref.md,
	    lg = _ref.lg,
	    _ref$style = _ref.style,
	    style = _ref$style === undefined ? {} : _ref$style,
	    props = _objectWithoutProperties(_ref, ['width', 'wrap', 'direction', 'align', 'alignItems', 'justify', 'gutter', 'sm', 'md', 'lg', 'style']);

	var display = styleDisplay({ sm: sm, md: md, lg: lg }) ? 'flex' : 'block';

	var flexBoxStyle = {
		display: display,
		width: width || null,
		minHeight: 0,
		height: 'auto',
		alignItems: align || null,
		flexWrap: wrap ? 'wrap' : null,
		flexDirection: direction || null,
		justifyContent: justify || null,
		marginLeft: gutter ? -_styles.scale[gutter] : null,
		marginRight: gutter ? -_styles.scale[gutter] : null
	};

	return _react2.default.createElement(_Container2.default, _extends({}, props, {
		style: _extends({}, flexBoxStyle, style),
		className: this.props.className || 'hutz-flexbox'
	}));
}

FlexBox.displayName = 'FlexBox';

FlexBox.propTypes = {
	align: _react.PropTypes.oneOf(['stretch', 'center', 'baseline', 'flex-start', 'flex-end']),
	direction: _react.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	gutter: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	justify: _react.PropTypes.oneOf(['center', 'space-around', 'space-between', 'flex-start', 'flex-end']),
	lg: _react.PropTypes.bool,
	md: _react.PropTypes.bool,
	sm: _react.PropTypes.bool,
	wrap: _react.PropTypes.bool
};

exports.default = FlexBox;


var styleDisplay = function styleDisplay(sizes) {
	return Object.keys(sizes).map(function (k) {
		return { val: sizes[k], bp: _styles.breakpoints[k] };
	}).some(function (s) {
		return s.val && (0, _dom.mm)(s.bp).matches || !Object.keys(sizes).some(function (v) {
			return sizes[v];
		});
	});
};