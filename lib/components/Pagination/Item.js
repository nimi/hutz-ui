'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Break = require('./Break');

var _Break2 = _interopRequireDefault(_Break);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItemFactory(_ref) {
	var hrefPrefix = _ref.hrefPrefix,
	    breakLabel = _ref.breakLabel;

	return function Item(_ref2) {
		var type = _ref2.type,
		    selected = _ref2.selected,
		    page = _ref2.page;

		return type === 'page' ? _react2.default.createElement(_Page2.default, {
			selected: selected,
			page: page,
			linkHref: hrefPrefix + page
		}) : _react2.default.createElement(_Break2.default, { breakLabel: breakLabel });
	};
}

exports.default = ItemFactory;