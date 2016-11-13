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

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Box(_ref) {
	var col = _ref.col,
	    sm = _ref.sm,
	    md = _ref.md,
	    lg = _ref.lg,
	    props = _objectWithoutProperties(_ref, ['col', 'sm', 'md', 'lg']);

	var sizes = { sm: sm, md: md, lg: lg };
	var widthProp = styleWidth(sizes);
	var width = widthProp && !col ? (0, _utils.w)(sizes[widthProp]) : (0, _utils.w)(col);
	var styleProps = boxStyle(_extends({}, props, { width: width }));
	var style = _extends({}, styleProps, props.style);

	return _react2.default.createElement(_Container2.default, _extends({}, props, {
		sm: sm,
		md: md,
		lg: lg,
		style: style
	}));
}

Box.displayName = 'Box';

Box.propTypes = {
	align: _react.PropTypes.oneOf(['stretch', 'center', 'baseline', 'flex-start', 'flex-end']),
	col: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	fill: _react.PropTypes.bool,
	lg: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	p: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pl: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	pt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	px: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	py: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),
	sm: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

exports.default = Box;


var boxStyle = function boxStyle(_ref2) {
	var align = _ref2.align,
	    fill = _ref2.fill,
	    width = _ref2.width;
	return {
		alignSelf: align || null,
		boxSizing: 'border-box',
		flex: fill ? '1 1 auto' : null,
		flexBasis: width,
		width: width
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