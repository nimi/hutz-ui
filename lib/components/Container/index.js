'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _utils = require('../../utils');

var _dom = require('../../utils/dom');

var _padding = require('../../utils/padding');

var _padding2 = _interopRequireDefault(_padding);

var _margin = require('../../utils/margin');

var _margin2 = _interopRequireDefault(_margin);

var _radii = require('../../utils/radii');

var _radii2 = _interopRequireDefault(_radii);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Container(_ref) {
	var backgroundColor = _ref.backgroundColor,
	    color = _ref.color,
	    col = _ref.col,
	    sm = _ref.sm,
	    md = _ref.md,
	    lg = _ref.lg,
	    style = _ref.style,
	    tagName = _ref.tagName,
	    circle = _ref.circle,
	    containerStyle = _ref.containerStyle,
	    p = _ref.p,
	    pb = _ref.pb,
	    pl = _ref.pl,
	    pr = _ref.pr,
	    pt = _ref.pt,
	    py = _ref.py,
	    px = _ref.px,
	    m = _ref.m,
	    mb = _ref.mb,
	    ml = _ref.ml,
	    mr = _ref.mr,
	    mt = _ref.mt,
	    mx = _ref.mx,
	    my = _ref.my,
	    round = _ref.round,
	    fill = _ref.fill,
	    borderLeft = _ref.borderLeft,
	    borderColor = _ref.borderColor,
	    update = _ref.update,
	    props = _objectWithoutProperties(_ref, ['backgroundColor', 'color', 'col', 'sm', 'md', 'lg', 'style', 'tagName', 'circle', 'containerStyle', 'p', 'pb', 'pl', 'pr', 'pt', 'py', 'px', 'm', 'mb', 'ml', 'mr', 'mt', 'mx', 'my', 'round', 'fill', 'borderLeft', 'borderColor', 'update']);

	var bgc = (0, _styles.colors)(backgroundColor) || backgroundColor;
	var c = color ? (0, _styles.colors)(color) : color;
	var sizes = { sm: sm, md: md, lg: lg };
	var widthProp = styleWidth(sizes);
	var width = widthProp && !col ? (0, _utils.w)(sizes[widthProp]) : (0, _utils.w)(col);
	var pd = { p: p, px: px, py: py, pb: pb, pr: pr, pl: pl, pt: pt };
	var mg = { m: m, mx: mx, my: my, mb: mb, mr: mr, ml: ml, mt: mt };

	var Component = tagName || 'div';
	var cxStyle = Object.assign(baseStyle({ width: width, bgc: bgc, c: c, fill: fill }), (0, _padding2.default)(pd, _styles.scale), (0, _margin2.default)(mg, _styles.scale), (0, _radii2.default)({ round: round, circle: circle }), style);

	return _react2.default.createElement(Component, _extends({}, props, {
		style: cxStyle
	}));
}

//React.renderToString(Container);

Container.displayName = 'Container';

Container.propTypes = {
	backgroundColor: _react.PropTypes.string,
	circle: _react.PropTypes.bool,
	col: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	color: _react.PropTypes.string,
	containerStyle: _react.PropTypes.object,
	lg: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	m: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	mb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	ml: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	mr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	mt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	mx: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	my: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	round: _react.PropTypes.bool,
	sm: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	tagName: _react.PropTypes.any
};

exports.default = Container;


var baseStyle = function baseStyle(_ref2) {
	var _ref2$bgc = _ref2.bgc,
	    bgc = _ref2$bgc === undefined ? null : _ref2$bgc,
	    _ref2$c = _ref2.c,
	    c = _ref2$c === undefined ? null : _ref2$c,
	    _ref2$shadow = _ref2.shadow,
	    shadow = _ref2$shadow === undefined ? false : _ref2$shadow,
	    _ref2$fill = _ref2.fill,
	    fill = _ref2$fill === undefined ? true : _ref2$fill,
	    width = _ref2.width;
	return {
		backgroundColor: bgc,
		boxSizing: 'border-box',
		boxShadow: shadow ? '0 2px 5px 0 rgba(0, 0, 0, 0.26)' : null,
		color: c,
		width: fill ? width : null
	};
};

var styleWidth = function styleWidth(_ref3) {
	var _ref3$sm = _ref3.sm,
	    sm = _ref3$sm === undefined ? 12 : _ref3$sm,
	    _ref3$md = _ref3.md,
	    md = _ref3$md === undefined ? 12 : _ref3$md,
	    _ref3$lg = _ref3.lg,
	    lg = _ref3$lg === undefined ? 12 : _ref3$lg;

	var size = Object.keys({ sm: sm, md: md, lg: lg }).map(function (key) {
		return { key: key, bp: _styles.breakpoints[key] };
	}).filter(function (s) {
		return (0, _dom.mm)(s.bp) && (0, _dom.mm)(s.bp).matches;
	}).slice(-1);

	return size.length && size[0].key;
};