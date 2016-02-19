'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = rgba;
function rgba(arr, alpha) {
	return 'rgba(' + arr.map(function (v) {
		return v + ',';
	}).join('') + '\n\t\t' + (Object.is(alpha, undefined) ? 1 : alpha) + ')';
}