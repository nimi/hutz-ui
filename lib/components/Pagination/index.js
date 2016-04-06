'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _styles = require('../../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Pagination(_ref) {
	var props = _objectWithoutProperties(_ref, []);

	var styles = Object.assign({}, style, props.style);

	return React.createElement(
		_Container2.default,
		_extends({
			style: styles
		}, props),
		'Pagination'
	);
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {};

exports.default = Pagination;

var style = {};