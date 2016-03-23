'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = margin;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function margin(_ref) {
	var m = _ref.m;
	var mx = _ref.mx;
	var my = _ref.my;
	var mt = _ref.mt;
	var mr = _ref.mr;
	var mb = _ref.mb;
	var ml = _ref.ml;
	var scale = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	var n = function n(key, x, s) {
		return typeof x === 'number' ? _defineProperty({}, key, s[x]) : null;
	};

	return Object.assign({}, n('margin', m, scale), n('marginTop', mt, scale), n('marginBottom', mb, scale), n('marginTop', my, scale), n('marginBottom', my, scale), n('marginLeft', ml, scale), n('marginRight', mr, scale), n('marginLeft', mx, scale), n('marginRight', mx, scale));
}