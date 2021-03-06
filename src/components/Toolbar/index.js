import React, { PropTypes } from 'react';
import FlexBox from '../FlexBox';
import { colors, typeography } from '../../styles';

function Toolbar({ ...props }) {
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<FlexBox
			align='center'
			className={props.className || 'hutz-toolbar'}
			backgroundColor={props.backgroundColor || 'blue'}
			px={1}
			style={styles}
			{...props}
		/>
	);
}

Toolbar.displayName = 'Toolbar';

Toolbar.propTypes = {
};

export default Toolbar;

const style = {
	minHeight: 45
};
