import React, { PropTypes, createElement } from 'react';
import { colors, typeography } from './styles';

function Heading({ size, caps, center, color, ...props }) {
	const elMap = new Map([
		[1, 'h1'],
		[2, 'h2'],
		[3, 'h3']
	]);

	const style = {
		textAlign: center ? 'center' : null,
		textTransform: caps ? 'uppercase' : null,
		letterSpacing: caps ? '0.425em' : null,
		color: color ? colors[color] : null
	};

	const el = size ? elMap.get(size) : elMap.get(1);

	return createElement(el, { style }, props.children);
}

Heading.displayName = 'Heading';

Heading.propTypes = {
	size: PropTypes.oneOf([1, 2, 3]),
	caps: PropTypes.bool,
	center: PropTypes.bool,
	color: PropTypes.string
};

export default Heading;
