import React, { PropTypes } from 'react';
import FlexBox from '../FlexBox';
import Icon from '../Icon';
import { typeColor } from '../../styles';

function Alert({ message, type, close, className, ...props }) {
	const backgroundColor = typeColor[type] || 'blue';
	const color = props.color || 'white';
	const styles = Object.assign({},
		style,
		props.style
	);

	return (
		<FlexBox
			className={className || 'hutz-alert'}
			align='center'
			color={color}
			backgroundColor={backgroundColor}
			px={2}
			py={1}
			style={styles}
			{...props}
		>
			<span style={{margin: 'auto 0'}}>{message}</span>
			<span style={{margin: 'auto'}} />
			<span style={{cursor: 'pointer'}}>
				<Icon type='close' color={color} onClick={close} />
			</span>
		</FlexBox>
	);
}

Alert.displayName = 'Alert';

Alert.propTypes = {
	close: PropTypes.func,
	message: PropTypes.string,
	type: PropTypes.oneOf([
		'primary',
		'warning',
		'success',
		'error'
	])
};

export default Alert;

const style = {
	fontSize: 16,
	height: 45
};
