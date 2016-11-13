'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownMenu(_ref) {
	var open = _ref.open,
	    type = _ref.type,
	    props = _objectWithoutProperties(_ref, ['open', 'type']);

	if (!open) {
		return null;
	}

	return _react2.default.createElement(
		_Container2.default,
		{ style: style.container },
		_react2.default.createElement(
			_Menu2.default,
			{ type: type || 2 },
			props.children
		)
	);
}

DropdownMenu.displayName = 'DropdownMenu';

exports.default = DropdownMenu;


var style = {
	container: {
		backgroundColor: 'white',
		border: 'solid 1px ' + _styles.colors.gray,
		position: 'absolute',
		left: 0,
		right: 'auto',
		top: '100%',
		bottom: 'auto'
	}
};