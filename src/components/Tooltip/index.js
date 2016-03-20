import React, {PropTypes} from 'react';
import radium from 'radium';
import Container from '../Container';
import {colors, typeography, zIndex} from '../../styles';

function Tooltip({ text, backgroundColor, width, color, ...props }) {
	const bgc = colors[backgroundColor] || backgroundColor;
	const c = colors[color] || color;
	const {container, tooltip, before, after, icon} = style({bgc, c, width});
	const containerStyle = Object.assign({},
		container,
		props.style
	);

	return (
		<Container
			className='hutz-tooltip-container'
			fill={false}
			tagName='span'
			style={containerStyle}
			{...props}
		>
			<style dangerouslySetInnerHTML={{__html: css}} />
			<span key={1} style={{...tooltip, ...before}} />
			{props.children}
			<Container
				fill={false}
				tagName='span'
				className='tooltip'
				key={2}
				style={{...tooltip, ...after}}
				round
			>
				{text}
				<span style={icon}  />
			</Container>
		</Container>
	);
}

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default Tooltip;

const style = ({bgc = 'black', c = 'white', width}) => ({
	container: {
		cursor: 'default',
		display: 'inline-block',
		position: 'relative',
	},
	tooltip: {
		bottom: '100%',
		left: '50%',
		position: 'absolute',
		transform: 'translateX(-50%)',
		zIndex: zIndex[5],
		pointerEvents: 'none',
		transition: 'all 0.3s ease',
	},
	after: {
		backgroundColor: bgc,
		color: c,
		padding: '5px 12px',
		whiteSpace: !width ? 'nowrap' : null,
		width
	},
	before: {
		position: 'absolute',
		background: 'transparent',
		border: '6px solid transparent',
		zIndex: zIndex[6]
	},
	icon: {
		position: 'absolute',
		top: '100%',
		left: '50%',
		border: '6px solid transparent',
		borderTopColor: bgc,
		transform: 'translateX(-50%)'
	}
});

const css = `
	.hutz-tooltip-container .tooltip { visibility: hidden; opacity: 0; }
	.hutz-tooltip-container:hover .tooltip { visibility: visible; opacity: 1; }
`.replace(/\n/g, '').replace(/\s\s+/g, ' ');
