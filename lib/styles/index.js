'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeography = require('./typeography');

Object.defineProperty(exports, 'typeography', {
	enumerable: true,
	get: function get() {
		return _typeography.default;
	}
});

var _colors = require('./colors');

Object.defineProperty(exports, 'colors', {
	enumerable: true,
	get: function get() {
		return _colors.default;
	}
});

var _input = require('./input');

Object.defineProperty(exports, 'InputStyles', {
	enumerable: true,
	get: function get() {
		return _input.default;
	}
});

var _button = require('./button');

Object.defineProperty(exports, 'buttonStyles', {
	enumerable: true,
	get: function get() {
		return _button.default;
	}
});
var scale = exports.scale = [0, 8, 16, 32, 64];

var fontScale = exports.fontScale = [12, 14, 16, 20, 24, 32, 48];

var zIndex = exports.zIndex = [0, 1, 2, 3, 4, 5];

var breakpoints = exports.breakpoints = {
	sm: '(min-width: 32em)',
	md: '(min-width: 48em)',
	lg: '(min-width: 64em)'
};

var typeColor = exports.typeColor = {
	'primary': 'blue',
	'success': 'green',
	'warning': 'yellow',
	'error': 'red'
};