import React, { PropTypes } from 'react';

function Select(props) {
	const opts = props.options.map((o, i) => {
		return (
			<option key={ i } {...o}>
				{ o.label }
			</option>
		);
	});

	const selectStyle = {
		appearance: 'none',
		WebkitAppearance: 'none'
	};

	return (

		<div>
			<label
				labelFor={props.name}
			>
				{props.label}
			</label>
			<select
				style={selectStyle}
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
