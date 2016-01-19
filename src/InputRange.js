import React, { PropTypes } from 'react';

function Fill(props) {
	const fillStyle = {
		width: 60, // should be dynamic
		height: '100%',
		background: '#333333',
		borderRadius: 10,
		position: 'absolute' // may not need this
	};

	return (
		<div
			style={fillStyle}
		/>
	);
}

function Slider(props) {
	const handleStyle = {
		left: 45,
		width: 40,
		height: 40,
		borderRadius: 40,
		top: -10,
		background: '#fff',
		border: '1px solid blue',
		display: 'inline-block',
		position: 'absolute'
	};

	return (
		<div
			style={handleStyle}
			onMouseDown={(e) => {console.log('mousedown handle')}}
			onClick={(e) => {console.log('click handle')}}
		/>

	);
}

function InputRange({
	max,
	min,
	step,
	val,
	orient,
	update,
	...props
}) {

	const sliderStyle = {
		background: '#e6e6e6',
		borderRadius: 10,
		display: 'block',
		height: 20,
		margin: '20px 0',
		position: 'relative',
		width: '100%',
		minWidth: 300
	};

	return (
		<div
			style={sliderStyle}
			onClick={() => {}}
			onMouseDown={update}
		>
			<Fill update={update} />
			<Slider />
		</div>
	);
}

InputRange.propTypes = {
	max: PropTypes.number,
	min: PropTypes.number,
	orient: PropTypes.string,
	step: PropTypes.number,
	update: PropTypes.func,
	val: PropTypes.number
};

InputRange.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	val: 0,
	orient: 'horizontal',
	update: update
};

function update(event, val, step) {
	console.log('update', event, event.currentTarget, event.view);
	return val + step;
}

export default InputRange;
