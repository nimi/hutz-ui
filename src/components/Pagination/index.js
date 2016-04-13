import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function Pagination({ ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container
			style={styles}
			{...props}
		>
			Pagination
		</Container>
	);
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
};

export default Pagination;

const style = {

};
