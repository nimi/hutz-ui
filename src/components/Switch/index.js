import React, {PropTypes} from 'react';
import Container from '../Container';
import {colors, zIndex} from '../../styles';
import pure from '../../decorators/pure';
import {randomId} from '../../utils';

function Switch({ id, active, onClick, activeColor, ...props }) {
	const color = active && activeColor ? activeColor : 'gray';
	const {container, input, label, knob} = style({active, color});
	const containerStyle = Object.assign({},
		container,
		props.style
	);

	return (
		<Container
			className='hutz-switch'
			fill={false}
			style={containerStyle}
			onClick={onClick}
			{...props}
		>
			<style dangerouslySetInnerHTML={{__html: css}} />
			<input
				className='hutz-switch-input'
				id={id}
				type='checkbox'
				style={input}
				checked={active}
			/>
			<label htmlFor={id} style={label} />
			<span style={knob} />
		</Container>
	);
}

Switch.displayName = 'Switch';

Switch.propTypes = {
	active: PropTypes.bool.isRequired,
	activeColor: PropTypes.string,
	disabled: PropTypes.bool,
	id: PropTypes.string
};

Switch.defaultProps = {
	id: randomId(5)
};

export default pure(Switch);

const style = ({active, color}) => ({
	container: {
		backgroundColor: colors(color, 4),
		borderRadius: '2em',
		position: 'relative',
		height: '1em',
		width: '3em',
	},
	input: {
		display: 'none'
	},
	label: {
		boxSizing: 'border-box',
		display: 'block',
		cursor: 'pointer',
		outline: 0,
		padding: 2,
		position: 'relative',
		userSelect: 'none',
		height: '2em',
		width: '3em',
		zIndex: zIndex[1]
	},
	knob: {
		backgroundColor: colors(color, 3),
		display: 'block',
		height: '150%',
		position: 'absolute',
		top: '-30%',
		width: '50%',
		borderRadius: '50%',
		boxShadow: '0 2px 2px 1px rgba(0,0,0,0.2)',
		transition: 'left 0.2s ease'
	}
});

const css = `
  .hutz-switch label::selection { background-color: transparent; }
  .hutz-switch input + label + span { left: 0; }
  .hutz-switch input:checked + label + span { left: 50%; }
`.replace(/\n/g, '').replace(/\s\s+/g, ' ');
