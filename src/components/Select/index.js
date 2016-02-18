import React, { PropTypes } from 'react';
import radium from 'radium';
import { w } from '../../utils';
import { colors, typeography, InputStyles } from '../../styles';
import Container from '../Container';

function Select({
	col,
	label,
	name,
	options,
	...props
}) {
	const opts = options.map((o, i) => {
		return (
			<option key={ i } {...o}>
				{ o.label }
			</option>
		);
	});

	return (
		<Container col={col}>
			<label
				labelFor={name}
				style={style.label}
			>
				{label}
			</label>
			<select
				style={style.select}
				{...props}
			>
				{opts}
			</select>
		</Container>
	);
}

Select.displayName = 'Select';

Select.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired
};

export default radium(Select);

const style = {
	select: {
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
	},
	label: InputStyles.labelStyle
};
