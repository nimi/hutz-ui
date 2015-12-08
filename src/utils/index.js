const transitions = {
	'WebkitTransition': 'WebkitTransitionEnd',
	'MozTransition': 'transitionend',
	'OTransition': 'oTransitionEnd',
	'transition': 'transitionend'
};

export const canUseDOM = !!(
	!Object.is(window, undefined) &&
	window.document &&
	window.document.createElement
);

export const canUseEventListeners =
	canUseDOM && !!(window.addEventListener || window.attachEvent);

export const canUseViewport = canUseDOM && !!window.screen;

export const isTouchDevice = canUseDOM && !!window.ontouchtart;

export function isTransform(name) {
	return name === 'transform' ||
		name === '--webkit-transform' ||
		name === '-moz-transform' ||
		name === '-o-transform' ||
		name === '-ms-transform';
}

let transitionEnd = null;

if (canUseDOM) {
	const div = document.createElement('div');
	for (let t in transitions) {
		if (div.style[t]) {
			transitionEnd = transitions[t];
		}
	}
}

export { transitionEnd };

export function l(...args) {
	console.log(...args);
}

export const noop = () => {};
