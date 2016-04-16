'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Break;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Break(_ref) {
	var breakLabel = _ref.breakLabel;

	return _react2.default.createElement(
		'li',
		{ style: style.item },
		breakLabel
	);
}

Break.displayName = 'Break';

Break.propTypes = {
	breakLabel: _react.PropTypes.string
};

var style = {
	item: {
		letterSpacing: '0.2em',
		//		padding: '0 10px',
		flex: '1 1 auto',
		textAlign: 'center'
	}
};