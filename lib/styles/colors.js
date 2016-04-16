'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = color;

var _utils = require('../utils');

var _ramda = require('ramda');

var COLORS = {
	blue: {
		C1: [94, 181, 240],
		C2: [89, 171, 227],
		C3: [79, 152, 201],
		C4: [64, 123, 163],
		C5: [39, 75, 99]
	},

	red: {
		C1: [229, 65, 74],
		C2: [217, 61, 70],
		C3: [191, 54, 62],
		C4: [153, 43, 49],
		C5: [89, 25, 29]
	},

	pink: {
		C1: [255, 170, 176],
		C2: [255, 93, 106],
		C3: [204, 75, 85],
		C4: [127, 47, 53],
		C5: [127, 85, 88]
	},

	green: {
		C1: [127, 194, 142],
		C2: [119, 181, 133],
		C3: [102, 156, 114],
		C4: [77, 117, 86],
		C5: [35, 54, 39]
	},

	yellow: {
		C1: [216, 188, 122],
		C2: [203, 177, 115],
		C3: [177, 155, 101],
		C4: [139, 121, 79],
		C5: [75, 66, 43]
	},

	orange: {
		C1: [215, 150, 103],
		C2: [202, 141, 97],
		C3: [176, 123, 85],
		C4: [138, 97, 66],
		C5: [74, 52, 36]
	},

	purple: {
		C1: [184, 153, 212],
		C2: [172, 144, 199],
		C3: [150, 125, 173],
		C4: [117, 71, 135],
		C5: [62, 52, 71]
	},

	gray: {
		C1: [247, 245, 245],
		C2: [243, 241, 241],
		C3: [227, 225, 225],
		C4: [172, 175, 175],
		C5: [143, 142, 142]
	},

	white: {
		C1: [255, 255, 255],
		C2: [249, 247, 247],
		C3: [243, 240, 240],
		C4: [251, 252, 245],
		C5: [245, 245, 243]
	},

	black: {
		C1: [51, 51, 50],
		C2: [41, 41, 40],
		C3: [38, 38, 37],
		C4: [31, 30, 30],
		C5: [0, 0, 0]
	}
};

function hasShade(color) {
	return !(0, _ramda.isNil)(color) && color.split('/').length > 1;
}

function getShade(color) {
	return color.split(/(\/|@)/)[1];
}

function getKey(color) {
	return !(0, _ramda.isNil)(color) && color.split(/(\/|@)/)[0];
}

function hasAlpha(color) {
	return !(0, _ramda.isNil)(color) && color.split('@').length > 1;
}

function getAlpha(color) {
	var colorProps = color.split(/(\/|@)/);

	return colorProps[colorProps.length - 1];
}

function color(key) {
	var shade = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	var a = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	var containsShade = hasShade(key);
	var containsAlpha = hasAlpha(key);

	if (containsShade) {
		shade = getShade(key);
	}
	if (containsAlpha) {
		a = getAlpha(key);
	}

	var colorKey = getKey(key);

	if (!containsShade && !containsAlpha && !COLORS[colorKey]) {
		return key;
	}

	return (0, _utils.rgba)(COLORS[colorKey]['C' + shade], a);
}

color.red = (0, _utils.rgba)(COLORS.red.C1);
color.blue = (0, _utils.rgba)(COLORS.blue.C1);
color.pink = (0, _utils.rgba)(COLORS.pink.C1);
color.green = (0, _utils.rgba)(COLORS.green.C1);
color.yellow = (0, _utils.rgba)(COLORS.yellow.C1);
color.orange = (0, _utils.rgba)(COLORS.orange.C1);
color.purple = (0, _utils.rgba)(COLORS.purple.C1);
color.black = (0, _utils.rgba)(COLORS.black.C1);
color.white = (0, _utils.rgba)(COLORS.white.C1);
color.gray = (0, _utils.rgba)(COLORS.gray.C2);