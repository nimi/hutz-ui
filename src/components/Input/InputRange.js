import React, {PropTypes} from 'react';
import {maxmin} from '../../utils';
import pure from '../../decorators/pure';

function Fill({val, valLimit, offset, max, min, horizontal}) {
	const position = getPositionFromValue(val, valLimit, max, min);
	const fillStyle = {
		width: horizontal ? position + offset : '100%',
		height: horizontal ? '100%' : position + offset,
		background: '#333',
		borderRadius: 10,
		position: 'absolute',
		bottom: horizontal ? null : 0
	};

	return <div style={fillStyle} />;
}

Fill.propTypes = {
	horizontal: PropTypes.bool,
	max: PropTypes.number,
	min: PropTypes.number,
	offset: PropTypes.number.isRequired,
	valLimit: PropTypes.number.isRequired
};

Fill.defaultProps = {
	horizontal: true
};

function Slider({ val, active, update, size, valLimit, max, min, step, horizontal}) {
	const position = getPositionFromValue(val, valLimit, max, min);
	const handleStyle = {
		left: horizontal ? position : -(size / 2),
		width: size,
		height: size,
		borderRadius: size,
		top: horizontal ? -(size / 2) : valLimit - position,
		background: '#333',
		border: '1px solid #333',
		display: 'inline-block',
		position: 'absolute'
	};

	const dragEnd = function dragEnd(e) {
		e.preventDefault();
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', dragEnd);
	};

	let handleMouseMove;

	return (
		<div
			style={handleStyle}
			onMouseDown={e => {
					const parent = e.target.parentNode.getBoundingClientRect();
					const direction = horizontal ? parent.left : parent.top;
					handleMouseMove = (event) => {
						const coordinate = horizontal ?
							event.clientX : event.clientY;

						const value = getValueFromPosition(
							coordinate - direction - (size / 2),
							valLimit,
							max,
							min,
							step,
							horizontal
						);
						event.preventDefault();
						update(value, event);
					};

					e.preventDefault();

					document.addEventListener('mousemove', handleMouseMove);
					document.addEventListener('mouseup', dragEnd);
			}}
		/>
	);
}

Slider.propTypes = {
	horizontal: PropTypes.bool,
	size: PropTypes.number.isRequired,
	valLimit: PropTypes.number.isRequired
};

Slider.defaultProps = {
	horizontal: true
};

function InputRange({
	max,
	min,
	step,
	val,
	orient,
	update,
	active,
	width,
	height,
	...props
}) {
	const horiz = orient === 'horizontal';
	const sliderStyle = {
		background: '#e6e6e6',
		borderRadius: 10,
		display: 'block',
		height: horiz ? 2 : height,
		margin: '20px 0',
		position: 'relative',
		width: '100%',
		maxWidth: horiz ? width : 2,
		cursor: 'pointer'
	};

	const valLimit = horiz ? width - 12 : height - 12;

	return (
		<div
			{...props}
			style={sliderStyle}
			onClick={() => {}}
		>
			<Fill
				offset={12 / 2}
				valLimit={valLimit}
				update={update}
				val={val}
				min={min}
				max={max}
				horizontal={horiz}
			/>
			<Slider
				valLimit={valLimit}
				size={12}
				val={val}
				update={update}
				active={active}
				max={max}
				min={min}
				step={step}
				horizontal={horiz}
			/>
		</div>
	);
}

InputRange.propTypes = {
	max: PropTypes.number,
	min: PropTypes.number,
	orient: PropTypes.string,
	step: PropTypes.number,
	update: PropTypes.func,
	val: PropTypes.number,
	width: PropTypes.number
};

InputRange.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	val: 0,
	orient: 'horizontal',
	width: 300,
	height: 150
};

function getPositionFromValue(value, valueLimit, max, min) {
	const percentage = (value - min) / (max - min);
	return Math.round(percentage * (valueLimit));
}

function getValueFromPosition(pos, posLimit, max, min, step, horizontal) {
	const percentage = (maxmin(pos, 0, posLimit) / (posLimit  || 1));
	return horizontal ?
		step * Math.round(percentage * (max - min) / step) + min :
		max - (step * Math.round(percentage * (max - min) / step) + min);
}

export default pure(InputRange);
