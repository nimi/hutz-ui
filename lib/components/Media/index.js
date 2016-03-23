'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Media(_ref) {
	var type = _ref.type;
	var src = _ref.src;

	var props = _objectWithoutProperties(_ref, ['type', 'src']);

	return _react2.default.createElement(_Container2.default, _extends({
		tagName: 'img',
		style: mediaStyle,
		src: src
	}, props));
}

Media.displayName = 'Media';

Media.propTypes = {
	src: _react.PropTypes.string,
	type: _react.PropTypes.string
};

exports.default = Media;

var mediaStyle = {
	maxWidth: '100%',
	minWidth: '100%',
	verticalAlign: 'top'
};