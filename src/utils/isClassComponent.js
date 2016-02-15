export default function isClassComponent(Component) {
	return Boolean(Component) &&
		Component.prototype &&
		Component.prototype.isReactComponent === 'object';
}
