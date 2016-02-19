'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _utils = require('../../utils');

var _dom = require('../../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styleWidth = function styleWidth(_ref) {
	var _ref$sm = _ref.sm;
	var sm = _ref$sm === undefined ? 12 : _ref$sm;
	var _ref$md = _ref.md;
	var md = _ref$md === undefined ? 12 : _ref$md;
	var _ref$lg = _ref.lg;
	var lg = _ref$lg === undefined ? 12 : _ref$lg;

	var size = Object.keys({ sm: sm, md: md, lg: lg }).map(function (key) {
		return { key: key, bp: _styles.breakpoints[key] };
	}).filter(function (s) {
		return (0, _dom.mm)(s.bp) && (0, _dom.mm)(s.bp).matches;
	}).slice(-1);

	return size.length && size[0].key;
};

function Container(_ref2) {
	var p = _ref2.p;
	var px = _ref2.px;
	var py = _ref2.py;
	var pt = _ref2.pt;
	var pb = _ref2.pb;
	var pl = _ref2.pl;
	var pr = _ref2.pr;
	var col = _ref2.col;
	var sm = _ref2.sm;
	var md = _ref2.md;
	var lg = _ref2.lg;
	var shadow = _ref2.shadow;
	var _ref2$style = _ref2.style;
	var style = _ref2$style === undefined ? {} : _ref2$style;

	var props = _objectWithoutProperties(_ref2, ['p', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'col', 'sm', 'md', 'lg', 'shadow', 'style']);

	var sizes = { sm: sm, md: md, lg: lg };
	var widthProp = styleWidth(sizes);
	var width = widthProp && !col ? (0, _utils.w)(sizes[widthProp]) : (0, _utils.w)(col);

	var containerStyle = {
		boxSizing: 'border-box',
		boxShadow: shadow ? '0 2px 5px 0 rgba(0, 0, 0, 0.26)' : null,
		padding: p ? _styles.scale[p] : null,
		paddingTop: py ? _styles.scale[py] : pt ? _styles.scale[pt] : null,
		paddingBottom: py ? _styles.scale[py] : pb ? _styles.scale[pb] : null,
		paddingLeft: px ? _styles.scale[px] : pl ? _styles.scale[pl] : null,
		paddingRight: px ? _styles.scale[px] : pr ? _styles.scale[pr] : null,
		width: width
	};

	return _react2.default.createElement('div', _extends({}, props, {
		style: _extends({}, containerStyle, style)
	}));
}

Container.displayName = 'Container';

Container.propTypes = {
	col: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	lg: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	sm: _react.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

exports.default = Container;