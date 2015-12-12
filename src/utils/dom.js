const transitions = {
	'WebkitTransition': 'WebkitTransitionEnd',
	'MozTransition': 'transitionend',
	'OTransition': 'oTransitionEnd',
	'transition': 'transitionend'
};

const canUseDOM = Boolean(
	!Object.is(window, undefined) &&
	window.document &&
	window.document.createElement
);

const canUseEventListeners =
	canUseDOM && !!(window.addEventListener || window.attachEvent);

const canUseViewport = canUseDOM && !!window.screen;

const isTouchDevice = canUseDOM && !!window.ontouchtart;

const isTransform = name => {
	return name === 'transform' ||
		name === '--webkit-transform' ||
		name === '-moz-transform' ||
		name === '-o-transform' ||
		name === '-ms-transform';
};

const transitionEndFn = (ts) => {
	if (!canUseDOM) { return null; }
	const el = document.createElement('div');
	return Object.keys(ts)
		.filter(k => el.style[ts[k]])[0];
};

let transitionEnd = null;

if (canUseDOM) {
	const div = document.createElement('div');
	for (let t in transitions) {
		if (div.style[t]) {
			transitionEnd = transitions[t];
		}
	}
}

const tEnd = transitionEndFn(transitions);

const mm = window.matchMedia;

export { canUseDOM };
export { canUseEventListeners };
export { canUseViewport };
export { isTouchDevice };
export { isTransform };
export { transitionEnd };
export { tEnd };
export { mm };
