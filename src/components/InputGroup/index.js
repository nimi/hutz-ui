import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function InputGroup({ ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container
			style={styles}
			{...props}
		>
			InputGroup
		</Container>
	);
}

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
};

export default InputGroup;

const style = {

};
