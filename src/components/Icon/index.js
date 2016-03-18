import React, { PropTypes } from 'react';
import radium from 'radium';
import Container from '../Container';
import icons from '../../icons';

function Icon({size, type, color, ...props}) {
	const icon = icons.get(type);
	const s = size || 25;

	return (
		<svg
			height='100%'
			preserveAspectRatio='xMidYMid meet'
			viewBox={`0 0 ${s} ${s}`}
			stroke={ color || 'black' }
			fill={ color || 'black' }
			style={{height: `${s}px`, width: `${s}px`, ...props.style}}
			width="100%"
			{...props}
		>
			{(() => {
				 return props.children ?
					 props.children :
					 <g id={ type }>
						 <path d={icon} />
					 </g>;
			 })()}
		</svg>
	);
}

export default radium(Icon);

Icon.displayName = 'Icon';

Icon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	type: PropTypes.string
};
