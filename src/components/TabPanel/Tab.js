import React, { PropTypes, Children, cloneElement } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function Tab({ activeIndex = 2, children, ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container
			style={styles}
			{...props}
		>
			{children}
		</Container>
	);
}

Tab.displayName = 'Tab';

Tab.propTypes = {
};

export default Tab;

const style = {

};
