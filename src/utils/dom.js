const transitions = {
	'transition': 'transitionEnd',
	'WebkitTransition': 'WebkitTransitionEnd',
	'MozTransition': 'MozTransitionEnd',
	'OTransition': 'transitionEnd'
};

const canUseDOM = Boolean(
	typeof window !== 'undefined' &&
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

const whichTransitionEnd = (ts) => {
	if (!canUseDOM) { return null; }
	const el = document.createElement('div');
	return Object.keys(ts)
		.filter(k => el.style.hasOwnProperty(k))[0];
};

const transitionEnd = whichTransitionEnd(transitions);

const mm = canUseDOM ? window.matchMedia : () => {};

export {
	canUseDOM,
	canUseEventListeners,
	canUseViewport,
	isTouchDevice,
	isTransform,
	transitionEnd,
	mm
};
