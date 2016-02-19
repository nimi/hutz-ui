'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (function (_Component) {
	_inherits(Button, _Component);

	function Button(props) {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));
	}

	_createClass(Button, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return !this.props.disabled;
		}
	}, {
		key: 'render',
		value: function render() {
			var _buttonStyles = (0, _styles.buttonStyles)(this.props.color);

			var initialStyle = _buttonStyles.initialStyle;
			var disabledStyle = _buttonStyles.disabledStyle;
			var fillStyle = _buttonStyles.fillStyle;
			var raisedStyle = _buttonStyles.raisedStyle;
			var outlineStyle = _buttonStyles.outlineStyle;
			var linkStyle = _buttonStyles.linkStyle;
			var _props = this.props;
			var bt = _props.bt;
			var disabled = _props.disabled;
			var groupStyle = _props.groupStyle;
			var size = _props.size;

			var styles = [initialStyle];

			if (disabled) {
				styles.push(disabledStyle);
			}
			if (size) {
				styles.push(fillStyle);
			}
			if (groupStyle) {
				styles.push(groupStyle);
			}
			if (bt === 'raised') {
				styles.push(raisedStyle);
			}
			if (bt === 'outline') {
				styles.push(outlineStyle);
			}
			if (bt === 'link') {
				styles.push(linkStyle);
			}
			if (this.props.style) {
				styles.push(this.props.style);
			}

			return _react2.default.createElement('button', _extends({}, this.props, {
				style: styles
			}));
		}
	}]);

	return Button;
})(_react.Component);

Button.displayName = 'Button';
Button.propTypes = {
	bt: _react.PropTypes.string,
	disabled: _react.PropTypes.bool,
	groupStyle: _react.PropTypes.object,
	size: _react.PropTypes.string
};
exports.default = (0, _radium2.default)(Button);