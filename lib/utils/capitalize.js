'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.capitalize = undefined;

var _ramda = require('ramda');

function changeFirstCase(fn) {
	return function (string) {
		var chr = string.charAt(0);
		var trailing = string.slice(1);

		return fn(chr) + trailing;
	};
}

var capitalize = exports.capitalize = changeFirstCase(_ramda.toUpper);