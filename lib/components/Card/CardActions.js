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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardActions(_ref) {
	var as = _ref.as;

	return _react2.default.createElement(
		_Container2.default,
		{ py: 2 },
		_react2.default.createElement(
			_Menu2.default,
			{ inline: true, type: 2, fill: false },
			as.map(function (_ref2, i) {
				var action = _ref2.action;
				var name = _ref2.name;
				return _react2.default.createElement(
					'a',
					{
						onClick: action,
						href: '#',
						key: i,
						style: { padding: '0 16px' }
					},
					name
				);
			})
		)
	);
}

exports.default = CardActions;