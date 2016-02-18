import isClassComponent from './isClassComponent';

export default function isFunctionComponent(Component) {
	return typeof Component === 'function' &&
		!isClassComponent(Component) &&
		!Component.defaultProps &&
		!Component.contextTypes &&
		!Component.propTypes;
}
