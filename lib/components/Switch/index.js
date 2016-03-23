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

var _pure = require('../../decorators/pure');

var _pure2 = _interopRequireDefault(_pure);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Switch(_ref) {
	var id = _ref.id;
	var active = _ref.active;
	var onClick = _ref.onClick;
	var activeColor = _ref.activeColor;

	var props = _objectWithoutProperties(_ref, ['id', 'active', 'onClick', 'activeColor']);

	var color = active && activeColor ? activeColor : 'gray';

	var _style = style({ active: active, color: color });

	var container = _style.container;
	var input = _style.input;
	var label = _style.label;
	var knob = _style.knob;

	var containerStyle = Object.assign({}, container, props.style);

	return _react2.default.createElement(
		_Container2.default,
		_extends({
			className: 'hutz-switch',
			fill: false,
			style: containerStyle,
			onClick: onClick
		}, props),
		_react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
		_react2.default.createElement('input', {
			className: 'hutz-switch-input',
			id: id,
			type: 'checkbox',
			style: input,
			checked: active
		}),
		_react2.default.createElement('label', { htmlFor: id, style: label }),
		_react2.default.createElement('span', { style: knob })
	);
}

Switch.displayName = 'Switch';

Switch.propTypes = {
	active: _react.PropTypes.bool.isRequired,
	activeColor: _react.PropTypes.string,
	disabled: _react.PropTypes.bool,
	id: _react.PropTypes.string
};

Switch.defaultProps = {
	id: (0, _utils.randomId)(5)
};

exports.default = (0, _pure2.default)(Switch);

var style = function style(_ref2) {
	var active = _ref2.active;
	var color = _ref2.color;
	return {
		container: {
			backgroundColor: (0, _styles.colors)(color, 4),
			borderRadius: '2em',
			position: 'relative',
			height: '1em',
			width: '3em'
		},
		input: {
			display: 'none'
		},
		label: {
			boxSizing: 'border-box',
			display: 'block',
			cursor: 'pointer',
			outline: 0,
			padding: 2,
			position: 'relative',
			userSelect: 'none',
			height: '2em',
			width: '3em',
			zIndex: _styles.zIndex[1]
		},
		knob: {
			backgroundColor: (0, _styles.colors)(color, 3),
			display: 'block',
			height: '150%',
			position: 'absolute',
			top: '-30%',
			width: '50%',
			borderRadius: '50%',
			boxShadow: '0 2px 2px 1px rgba(0,0,0,0.2)',
			transition: 'left 0.2s ease'
		}
	};
};

var css = '\n  .hutz-switch label::selection { background-color: transparent; }\n  .hutz-switch input + label + span { left: 0; }\n  .hutz-switch input:checked + label + span { left: 50%; }\n'.replace(/\n/g, '').replace(/\s\s+/g, ' ');