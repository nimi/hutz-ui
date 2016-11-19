import React, { PropTypes } from 'react';
import icons from '../../icons';

function Icon({size, type, color, ...props}) {
	const icon = icons.get(type);
	const s = size || 25;
	const styles = Object.assign({},
		{height: `${s}px`, width: `${s}px`},
		props.style
	);

	return (
		<svg
			className={props.className || 'hutz-icon'}
			height='100%'
			width='100%'
			preserveAspectRatio='xMidYMid meet'
			viewBox={`0 0 ${s} ${s}`}
			stroke={ color || 'black' }
			fill={ color || 'black' }
			style={styles}
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

export default Icon;

Icon.displayName = 'Icon';

Icon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	type: PropTypes.string
};
