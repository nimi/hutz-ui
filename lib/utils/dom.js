'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var transitions = {
	'transition': 'transitionEnd',
	'WebkitTransition': 'WebkitTransitionEnd',
	'MozTransition': 'MozTransitionEnd',
	'OTransition': 'transitionEnd'
};

var canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

var canUseEventListeners = canUseDOM && !!(window.addEventListener || window.attachEvent);

var canUseViewport = canUseDOM && !!window.screen;
var isTouchDevice = canUseDOM && !!window.ontouchtart;

var isTransform = function isTransform(name) {
	return name === 'transform' || name === '--webkit-transform' || name === '-moz-transform' || name === '-o-transform' || name === '-ms-transform';
};

var whichTransitionEnd = function whichTransitionEnd(ts) {
	if (!canUseDOM) {
		return null;
	}
	var el = document.createElement('div');
	return Object.keys(ts).filter(function (k) {
		return el.style.hasOwnProperty(k);
	})[0];
};

var transitionEnd = whichTransitionEnd(transitions);

var mm = canUseDOM ? window.matchMedia : function () {};

exports.canUseDOM = canUseDOM;
exports.canUseEventListeners = canUseEventListeners;
exports.canUseViewport = canUseViewport;
exports.isTouchDevice = isTouchDevice;
exports.isTransform = isTransform;
exports.transitionEnd = transitionEnd;
exports.mm = mm;