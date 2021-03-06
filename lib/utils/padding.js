'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function padding(_ref) {
	var p = _ref.p,
	    px = _ref.px,
	    py = _ref.py,
	    pt = _ref.pt,
	    pr = _ref.pr,
	    pb = _ref.pb,
	    pl = _ref.pl;
	var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var n = function n(key, x, s) {
		return typeof x === 'number' ? _defineProperty({}, key, s[x]) : null;
	};

	return Object.assign({}, n('padding', p, scale), n('paddingTop', pt, scale), n('paddingBottom', pb, scale), n('paddingTop', py, scale), n('paddingBottom', py, scale), n('paddingLeft', pl, scale), n('paddingRight', pr, scale), n('paddingLeft', px, scale), n('paddingRight', px, scale));
}

exports.default = padding;