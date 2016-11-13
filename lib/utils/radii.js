"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = radii;
function radii(_ref) {
	var round = _ref.round,
	    circle = _ref.circle;
	var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	var borderRadius = round ? r : null;

	if (circle) {
		borderRadius = 99999;
	}

	return Boolean(borderRadius) ? { borderRadius: borderRadius } : {};
}