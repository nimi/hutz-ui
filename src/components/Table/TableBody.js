import React, { PropTypes } from 'react';
import { colors } from '../../styles';

export default function TableBody({data, number, ...props}) {
	const renderItem = (item, i) => {
		const Component = number && i === 0 ? 'th' : 'td';
		return (
			<Component
				style={style.base}
				key={i}
				children={item}
			/>
		);
	};

	const renderRow = (row, i) => (
		<tr key={i}>{row.map(renderItem)}</tr>
	);

	return (
		<tbody {...props}>
			{data.map(renderRow)}
		</tbody>
	);
}

const style = {
	base: {
		borderTop: `1px solid ${colors.gray}`,
		lineHeight: 1.5,
		padding: 8,
		textAlign: 'left',
		verticalAlign: 'top'
	}
};
