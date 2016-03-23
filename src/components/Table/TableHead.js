import React, { PropTypes } from 'react';
import { colors } from '../../styles';

export default function TableHead({data, ...props}) {
	const renderHeading = (heading, i) => (
		<th
			key={i}
			children={heading}
			style={style.base}
		/>
	);

	return (
		<thead {...props}>
			<tr>{data.map(renderHeading)}</tr>
		</thead>
	);
}

const style = {
	base: {
		borderBottom: `2px solid ${colors.gray}`,
		lineHeight: 1.5,
		padding: 8,
		textAlign: 'left',
		verticalAlign: 'bottom'
	}
};
