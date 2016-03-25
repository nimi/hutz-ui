import React from 'react';
import Container from '../Container';
import {colors} from '../../styles';

function CardHeader(props) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container p={2} style={styles} {...props}>
			{props.children}
		</Container>
	);
}

const style = {
	backgroundColor: colors('gray', 1)
};

export default CardHeader;
