'use strict';

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

function Breadcrumbs(_ref) {
	var _ref$links = _ref.links;
	var links = _ref$links === undefined ? mockLinks : _ref$links;
	var Component = _ref.Component;

	var props = _objectWithoutProperties(_ref, ['links', 'Component']);

	var LinkComponent = Component || 'a';
	var items = links.map(function (_ref2, i) {
		var item = _ref2.item;
		return _react2.default.createElement(
			'div',
			{ style: style.item, key: i },
			_react2.default.createElement(
				LinkComponent,
				{
					href: item.href,
					to: item.href
				},
				item.name
			),
			i < links.length - 1 && _react2.default.createElement(
				'span',
				{ style: style.divider },
				'/'
			)
		);
	});

	return _react2.default.createElement(
		_Container2.default,
		props,
		items
	);
}

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.propTypes = {
	links: _react.PropTypes.array.isRequired
};

exports.default = Breadcrumbs;

var style = {
	item: {
		display: 'inline-flex'
	},
	divider: {
		padding: '0 10px'
	}
};