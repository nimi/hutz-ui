import React, { PropTypes } from 'react';

function Select(props) {
	const opts = props.options.map((o, i) => {
		return (
			<option key={ i } {...o}>
				{ o.label }
			</option>
		);
	});

	return (
		<div>
			<label
				labelFor={props.name}
			>
				{props.label}
			</label>
			<select
				{...props}
			>
				{opts}
			</select>
		</div>
	);
}

Select.displayName = 'Select';

Select.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired
};

export default Select;
