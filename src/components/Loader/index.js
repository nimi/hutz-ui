import React, {PropTypes} from 'react';
import colors from '../../styles/colors';

import Container from '../Container';
import Icon from '../Icon';

function Loader({size = 100, color, ...props}) {
	const {container, circle} = style(size, color);

	return (
		<Container style={{...container}} fill={false} {...props}>
			<style dangerouslySetInnerHTML={{__html: css}} />
			<Icon
				size={size}
				className='hutz-loader-icon'
			>
				<circle 
					style={circle} cx={size / 2} cy={size / 2} r={size / 2 - 10} 
					className='hutz-loader-circle'
				/>
			</Icon>
		</Container>
	);
}

Loader.displayName = 'Loader';

export default Loader;

const css = `
	@keyframes rotate {
		100% { transform: rotate(360deg); }
	}
	@keyframes dash {
		0% { stroke-dasharray: 1, 350; stroke-dashoffset: 0; }
		50% { stroke-dasharray: 220, 350; stroke-dashoffset: -90; }
		100% { stroke-dasharray: 220, 350; stroke-dashoffset: -270; }
	}
	.hutz-loader-circle { 
		animation: dash 1.5s ease-in-out infinite 0s;
		stroke-dasharray: 1, 400;
		stroke-dashoffset: 0;
	}
	.hutz-loader-icon { animation: rotate 1.5s linear infinite; }
`.replace(/\n/g, '').replace(/\s\s+/g, ' ');


const style = (size, color) => ({
	container: {
		width: size || 50,
		height: size || 50
	},
	circle: {
		strokeDashoffset: 0,
		strokeLinecap: 'round',
		fill: 'none',
		strokeWidth: 3,
		stroke: colors[color] || color
	}
});
