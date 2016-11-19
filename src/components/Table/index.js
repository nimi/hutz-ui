import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({ headings, data, number, ...props }) {
	if (!data) { return <span>No data to display</span>; }

	const tableHeadings = !number ? headings : ['#'].concat(headings);
	const tableRows = !number ? data : data.map((d, i) => [i + 1].concat(d));

	const styles = Object.assign({},
		props.style
	);

	return (
		<Container
			fill={false}
			style={styles}
			{...props}
			className={props.className || 'hutz-table'}
		>
			<Container
				tagName='table'
				style={style.base}
			>
				<TableHead data={tableHeadings} />
				<TableBody data={tableRows} number={number} />
			</Container>
		</Container>
	);
}

Table.displayName = 'Table';

Table.propTypes = {
};

export default Table;

const style = {
	base: {
		borderCollapse: 'collapse',
		lineHeight: 1.5,
		fontSize: 14
	},
	head: {
		fontSize: 14
	}
};
