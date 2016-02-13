import React, { PropTypes } from 'react';
import { colors, typeography, scale } from './styles';

function Media({
	...props
}) {
	return (
		<li
			style={styles}
			{...props}
		/>
	);
}

Media.displayName = 'Media';

Media.propTypes = {
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

export default Media;

const mediaStyle = {

};
