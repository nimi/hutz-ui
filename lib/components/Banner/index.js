'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexBox = require('../FlexBox');

var _FlexBox2 = _interopRequireDefault(_FlexBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Banner(_ref) {
	var align = _ref.align,
	    image = _ref.image,
	    style = _ref.style,
	    className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['align', 'image', 'style', 'className']);

	var alignItems = alignment[align];
	var styles = Object.assign(bannerStyle({ align: align, image: image }), style);

	return _react2.default.createElement(_FlexBox2.default, _extends({
		direction: 'column',
		alignItems: alignItems,
		justify: 'center',
		style: styles,
		className: className || 'hutz-banner'
	}, props));
}

exports.default = Banner;


Banner.propTypes = {
	align: _react.PropTypes.oneOf(['center', 'left', 'right']),
	image: _react.PropTypes.string
};

var bannerStyle = function bannerStyle(_ref2) {
	var align = _ref2.align,
	    image = _ref2.image;
	return {
		minHeight: '100vh',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: !!image ? 'url(' + image + ')' : null,
		textAlign: align === 'center' ? 'center' : null
	};
};

var alignment = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end'
};