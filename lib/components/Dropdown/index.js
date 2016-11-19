'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('../../styles');

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Dropdown(_ref) {
	var buttonLabel = _ref.buttonLabel,
	    props = _objectWithoutProperties(_ref, ['buttonLabel']);

	var styles = Object.assign({}, dropdownStyle.container, props.style);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			fill: false,
			style: styles
		}, props, {
			className: this.props.className || 'hutz-dropdown'
		}),
		_react2.default.createElement(
			_Button2.default,
			{ style: dropdownStyle.button },
			buttonLabel,
			_react2.default.createElement(_Icon2.default, {
				type: 'arrow',
				size: 10,
				style: dropdownStyle.arrow
			})
		),
		props.children
	);
}

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
	buttonLabel: _react.PropTypes.string,
	open: _react.PropTypes.bool
};

Dropdown.defaultProps = {
	open: false
};

exports.default = Dropdown;


var dropdownStyle = {
	container: {
		position: 'relative',
		minHeight: 40,
		maxWidth: 200
	},
	button: {
		width: '100%'
	},
	arrow: {
		display: 'inline-block',
		paddingLeft: '10%',
		paddingRight: '5%',
		paddingBottom: 4,
		width: 5
	}
};