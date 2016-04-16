'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _color = require('./color');

Object.defineProperty(exports, 'rgba', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_color).default;
	}
});

var _capitalize = require('./capitalize');

Object.defineProperty(exports, 'capitalize', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_capitalize).default;
	}
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var l = exports.l = function l() {
	var _console;

	return (_console = console).log.apply(_console, arguments);
};
var noop = exports.noop = function noop() {};
var w = exports.w = function w() {
	var v = arguments.length <= 0 || arguments[0] === undefined ? 12 : arguments[0];
	return v ? v / 12 * 100 + '%' : null;
};
var maxmin = exports.maxmin = function maxmin(val, min, max) {
	return val > max ? max : val < min ? min : val;
};
var randomId = exports.randomId = function randomId(len) {
	var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var id = Array(len).fill().map(function () {
		return s.charAt(Math.floor(Math.random() * s.length));
	});
	return 'hutz-' + id.join('');
};