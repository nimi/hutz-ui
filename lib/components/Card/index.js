'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../../styles');

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _CardHeading = require('./CardHeading');

var _CardHeading2 = _interopRequireDefault(_CardHeading);

var _CardActions = require('./CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardMedia = require('./CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Card(_ref) {
	var actions = _ref.actions,
	    imgSrc = _ref.imgSrc,
	    text = _ref.text,
	    title = _ref.title,
	    subtitle = _ref.subtitle,
	    props = _objectWithoutProperties(_ref, ['actions', 'imgSrc', 'text', 'title', 'subtitle']);

	return _react2.default.createElement(
		_Box2.default,
		_extends({}, props, {
			style: _extends({}, props.style, cardContainerStyle(props)),
			className: this.props.className || 'hutz-card'
		}),
		function () {
			return title ? _react2.default.createElement(_CardHeading2.default, { t: title, s: subtitle }) : null;
		}(),
		function () {
			return imgSrc ? _react2.default.createElement(_CardMedia2.default, { s: imgSrc }) : null;
		}(),
		function () {
			return text ? _react2.default.createElement(_CardText2.default, { t: text }) : null;
		}(),
		function () {
			return actions ? _react2.default.createElement(_CardActions2.default, { as: actions }) : null;
		}()
	);
}

Card.displayName = 'Card';

Card.propTypes = {
	actions: _react.PropTypes.array,
	imgSrc: _react.PropTypes.string,
	subtitle: _react.PropTypes.string,
	text: _react.PropTypes.string,
	title: _react.PropTypes.string
};

exports.default = Card;


var cardContainerStyle = function cardContainerStyle() {
	return {
		border: 'solid 1px ' + _styles.colors.gray
	};
};