import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function TabPanel({ ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<Container
			style={styles}
			{...props}
		>
			TabPanel
		</Container>
	);
}

TabPanel.displayName = 'TabPanel';

TabPanel.propTypes = {
};

export default TabPanel;

const style = {

};
