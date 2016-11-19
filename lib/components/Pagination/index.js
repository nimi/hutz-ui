'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _paginate = require('../../utils/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Pagination(_ref) {
	var initialSelected = _ref.initialSelected,
	    forceSelected = _ref.forceSelected,
	    hrefPrefix = _ref.hrefPrefix,
	    totalPages = _ref.totalPages,
	    previousLabel = _ref.previousLabel,
	    nextLabel = _ref.nextLabel,
	    breakLabel = _ref.breakLabel,
	    totalMarginPagesDisplayed = _ref.totalMarginPagesDisplayed,
	    totalPagesDisplayed = _ref.totalPagesDisplayed,
	    props = _objectWithoutProperties(_ref, ['initialSelected', 'forceSelected', 'hrefPrefix', 'totalPages', 'previousLabel', 'nextLabel', 'breakLabel', 'totalMarginPagesDisplayed', 'totalPagesDisplayed']);

	var pageProps = {
		initialSelected: initialSelected,
		forceSelected: forceSelected,
		hrefPrefix: hrefPrefix,
		totalPages: totalPages,
		previousLabel: previousLabel,
		nextLabel: nextLabel,
		breakLabel: breakLabel,
		totalMarginPagesDisplayed: totalMarginPagesDisplayed,
		totalPagesDisplayed: totalPagesDisplayed
	};

	var styles = Object.assign({}, style.container, props.style);

	var selected = initialSelected ? initialSelected : forceSelected ? forceSelected : 6;

	var Item = (0, _Item2.default)(pageProps);
	var pages = (0, _paginate2.default)(_extends({}, pageProps, { selected: selected })).reduce(function (prev, curr, i) {
		prev['key' + i] = Item(curr);
		return prev;
	}, {});

	var previousLink = selected === 0 ? '#' : hrefPrefix + selected;
	var nextLink = selected === totalPages - 1 ? '#' : hrefPrefix + (selected + 2);
	return _react2.default.createElement(
		_Container2.default,
		_extends({
			style: styles
		}, props, {
			className: props.className || 'hutz-pagination'
		}),
		_react2.default.createElement(
			'ul',
			{ style: style.list },
			_react2.default.createElement(
				'li',
				{ style: style.previous },
				_react2.default.createElement(
					_Button2.default,
					{ href: previousLink, style: style.button },
					previousLabel
				)
			),
			(0, _reactAddonsCreateFragment2.default)(pages),
			_react2.default.createElement(
				'li',
				{ style: style.next },
				_react2.default.createElement(
					_Button2.default,
					{ href: nextLink, style: style.button },
					nextLabel
				)
			)
		)
	);
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
	breakLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
	forceSelected: _react.PropTypes.number,
	hrefPrefix: _react.PropTypes.string,
	initialSelected: _react.PropTypes.number,
	nextLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
	previousLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
	totalMarginPagesDisplayed: _react.PropTypes.number.isRequired,
	totalPages: _react.PropTypes.number.isRequired,
	totalPagesDisplayed: _react.PropTypes.number.isRequired
};

Pagination.defaultProps = {
	totalPages: 100,
	totalPagesDisplayed: 3,
	totalMarginPagesDisplayed: 2,
	previousLabel: '<',
	nextLabel: '>',
	breakLabel: '...',
	hrefPrefix: '/page/'
};

exports.default = Pagination;


var style = {
	container: {
		maxWidth: 450
	},
	list: {
		display: 'flex',
		listStyleType: 'none',
		padding: 0,
		margin: '10px 0'
	},
	previous: {
		padding: '0 10px 0 0'
	},
	next: {
		padding: '0 0 0 10px'
	},
	button: {
		fontSize: '0.85em',
		padding: '0.5em 0.75em'
	}
};