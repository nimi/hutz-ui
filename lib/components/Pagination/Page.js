'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Page(_ref) {
	var page = _ref.page,
	    onPage = _ref.onPage,
	    selected = _ref.selected;

	console.log(selected);
	return _react2.default.createElement(
		'li',
		{ style: style.item, className: 'hutz-ui-page-item' + (selected ? ' active' : '') },
		_react2.default.createElement(
			_Button2.default,
			{ onClick: function onClick(e) {
					return onPage(e, page, selected);
				}, style: style.button },
			page
		)
	);
}

Page.displayName = 'Page';

Page.propTypes = {
	page: _react.PropTypes.number.isRequired,
	selected: _react.PropTypes.bool.isRequired,
	onPage: _react.PropTypes.func
};

Page.defaultProps = {
	onPage: function onPage() {}
};

exports.default = Page;


var style = {
	item: {
		padding: '0 5px'
	},
	button: {
		fontSize: '0.85em',
		padding: '0.5em 0.9em',
		flex: '1 1 auto'
	}
};