'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = prefix;

var _capitalize = require('./capitalize');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var wk = 'Webkit';
var mz = 'Moz';
var ms = 'ms';
var op = 'o';

var all = [wk, mz, ms, op];
var w = [wk];
var wz = [wk, mz];
var ws = [wk, ms];
var wzs = [wk, mz, ms];
var wzo = [wk, ms, op];

var client = function (agent) {
	if (/Chrome|Safari/.test(agent)) {
		return wk;
	}
	if (/Firefox/.test(agent)) {
		return mz;
	}
	if (/MSIE/.test(agent)) {
		return ms;
	}
	if (/Opera/.test(agent)) {
		return [wk, op];
	}

	return all;
}(navigator ? navigator.userAgent : '');

var rules = new Map([['alignContent', w], ['alignItems', w], ['alignSelf', w], ['animation', wz], ['animationDelay', wz], ['animationDirection', wz], ['animationDuration', wz], ['animationFillMode', wz], ['animationIterationCount', wz], ['animationName', wz], ['animationPlayState', wz], ['animationTimingFunction', wz], ['appearance', wz], ['backfaceVisibility', wz], ['backgroundClip', w], ['borderImage', wzo], ['borderImageSlice', wzo], ['boxShadow', wzs], ['boxSizing', wz], ['clipPath', w], ['columns', wz], ['cursor', wz], ['flex', ws], //new flex and 2012 specification ], no support for old specification
['flexBasis', ws], ['flexDirection', ws], ['flexFlow', ws], ['flexGrow', ws], ['flexShrink', ws], ['flexWrap', ws], ['fontSmoothing', wz], ['justifyContent', wz], ['order', wz], ['perspective', wz], ['perspectiveOrigin', wz], ['transform', wzs], ['transformOrigin', wzs], ['transformOriginX', wzs], ['transformOriginY', wzs], ['transformOriginZ', wzs], ['transformStyle', wzs], ['transition', wzs], ['transitionDelay', wzs], ['transitionDuration', wzs], ['transitionProperty', wzs], ['transitionTimingFunction', wzs], ['userSelect', wzs]]);

var clientRules = new Map([].concat(_toConsumableArray(rules)).filter(function (_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var key = _ref2[0];
	var val = _ref2[1];
	return val.some(function (v) {
		return v === client;
	});
}));

function updateWithPrefix(key) {
	return '' + client + (0, _capitalize.capitalize)(key);
}

function iterateKeys(obj) {
	return Object.keys(obj).reduce(function (prev, curr) {
		if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
			prev[curr] = iterateKeys(obj);
		} else {
			var key = clientRules.has(curr) ? updateWithPrefix(curr) : curr;
			prev[key] = obj[curr];
		}

		return prev;
	}, {});
}

function prefix(style) {
	if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
		throw new TypeError('Invalid argument type, expect object');
	}

	return iterateKeys(style);
};