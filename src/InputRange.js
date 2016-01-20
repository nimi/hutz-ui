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

function Slider({ val, active, update }) {
	console.log(val);
	const handleStyle = {
		left: val,
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
			onMouseMove={e => active && update(e)}
			onClick={e => {console.log('click handle')}}
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
	active,
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
			{...props}
			style={sliderStyle}
			onClick={() => {}}
		>
			<Fill update={update} />
			<Slider val={val} update={update} active={active} />
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
	console.log('update', event);
	return val + step;
}

export default InputRange;
