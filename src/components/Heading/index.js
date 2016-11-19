import React, {PropTypes} from 'react';
import Container from '../Container';
import { colors, typeography as type } from '../../styles';

function Heading({ size, content, ...props }) {
	const el = elMap.get(size);
	const style = headingStyle(props, size);

	return (
		<Container
			tagName={el}
			style={{...style, ...props.style}}
			{...props}
			className={this.props.className || 'hutz-heading'}
		>
			{content || props.children}
		</Container>
	);
}

Heading.displayName = 'Heading';

Heading.propTypes = {
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	caps: PropTypes.bool,
	center: PropTypes.bool,
	color: PropTypes.string,
	content: PropTypes.string
};

Heading.defaultProps = {
	size: 1
};

export default Heading;

const elMap = new Map([
	[1, 'h1'],
	[2, 'h2'],
	[3, 'h3'],
	[4, 'h4'],
	[5, 'h5'],
	[6, 'h6']
]);

const headingStyle = ({center, caps, color}, size) => ({
	textAlign: center ? 'center' : null,
	textTransform: caps ? 'uppercase' : null,
	letterSpacing: caps ? '0.425em' : null,
	fontWeight: size === 1 ? 100 : 400,
	color: color ? colors[color] : null,
	margin: '1em 0',
	...type[`heading${size}`]
});
