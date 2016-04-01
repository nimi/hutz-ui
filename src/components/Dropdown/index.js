import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function Dropdown({ ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container
			style={styles}
			{...props}
		>
			Dropdown
		</Container>
	);
}

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
};

export default Dropdown;

const style = {

};
