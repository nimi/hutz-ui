import React, { PropTypes } from 'react';
import radium from 'radium'
import { colors, typeography } from './styles';

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

export default radium(Select);

var selectStyle = {
	backgroundColor: colors('gray', 1),
	color: colors('gray', 5),
	height: '2.5rem',
	fontSize: typeography.body1.fontSize,
	display: 'block',
	verticalAlign: 'middle',
	width: '100%',
	':hover': {
		backgroundColor: colors('gray', 2)
	}
};
