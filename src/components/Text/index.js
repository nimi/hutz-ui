import React, { PropTypes } from 'react';
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
		<p
			{...props}
			style={style}
		>
			{content || props.children}
		</p>
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
