import React, {PropTypes} from 'react';
import radium, {StyleRoot} from 'radium';
import colors from '../../styles/colors';

import Container from '../Container';
import Icon from '../Icon';

function Loader({size, color, ...props}) {
	const {container, icon, circle} = style(size, color);

	return (
		<Container style={{...container}} fill={false}>
			<StyleRoot>
				<Icon
					size={100}
					style={icon}
				>
					<circle style={circle} cx='50' cy='50' r='45' />
				</Icon>
			</StyleRoot>
		</Container>
	);
}

Loader.displayName = 'Loader';

export default radium(Loader);

const rotate = radium.keyframes({
	'100%': {
		transform: 'rotate(360deg)'
	}
}, 'rotate');

const dash = radium.keyframes({
	'0%': { strokeDasharray: '1,350', strokeDashoffset: 0 },
	'50%': { strokeDasharray: '220, 350', strokeDashoffset: -90 },
	'100%': { strokeDasharray: '220, 350', strokeDashoffset: -270 }
}, 'dash');


const style = (size, color) => ({
	container: {
		width: size || 50,
		height: size || 50
	},
	icon: {
		animation: 'rotate 1.5s linear infinite',
		animationName: rotate
	},
	circle: {
		animation: 'dash 1.5s ease-in-out infinite 0s',
		animationName: dash,
		strokeDasharray: '1, 400',
		strokeDashoffset: 0,
		strokeLinecap: 'round',
		fill: 'none',
		strokeWidth: 3,
		stroke: colors[color] || color
	}
});
