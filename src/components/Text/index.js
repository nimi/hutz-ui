import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors, typeography } from '../../styles';

function Text({ small, caps, center, color, content, ...props }) {
	const smallStyle = small ? typeography.small : null;

	const style = {
		textAlign: center ? 'center' : null,
		textTransform: caps ? 'uppercase' : null,
		letterSpacing: caps ? '0.125em' : null,
		color: color ? colors[color] : null
	};

	return (
		<Container
			fill={false}
			tagName='p'
			style={style}
			{...props}
			className={this.props.className || 'hutz-text'}
		>
			{content || props.children}
		</Container>
	);
}

Text.displayName = 'Text';

Text.propTypes = {
	small: PropTypes.bool,
	caps: PropTypes.bool,
	center: PropTypes.bool,
	color: PropTypes.string,
	content: PropTypes.string
};

export default Text;
