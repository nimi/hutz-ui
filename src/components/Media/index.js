import React, { PropTypes } from 'react';
import { colors, typeography, scale } from '../../styles';

function Media({
	type,
	src,
	...props
}) {
	return (
		<img
			style={mediaStyle}
			src={src}
			{...props}
		/>
	);
}

Media.displayName = 'Media';

Media.propTypes = {
	src: PropTypes.string,
	type: PropTypes.string
};

export default Media;

const mediaStyle = {
	maxWidth: '100%',
	minWidth: '100%',
	verticalAlign: 'top',
	width: '100%'
};
