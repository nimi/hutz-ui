const shallowEqual = (a, b) => {
	if (Object.is(a, b)) { return true; }

	const keysA = Object.keys(a);
	const keysB = Object.keys(b);

	if (keysA.length !== keysB.length) { return false; }

	const hasOwn = Object.prototype.hasOwnProperty;

	for (var i = 0; i < keysA.length; i++) {
		if (!bHasOwnProp(keysA[i]) || a[keysA[i]] !== b[keysA[i]]) {
			return false;
		}

		const valA = objA[keysA[i]];
		const valB = objB[keysA[i]];

		if (valA !== valB) { return false; }
	}

	return true;
};

function shouldComponentUpdate (nextProps, nextState) {
	return !shallowEqual(this.props, nextProps) ||
         !shallowEqual(this.state, nextState);
}

export default function PureRender(component) {
	component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

