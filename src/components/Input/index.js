import React, { PropTypes } from 'react';
import { typeography, InputStyles } from '../../styles';
import Icon from '../Icon';
import Container from '../Container';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputCheckbox from './InputCheckbox';
import InputRange from './InputRange';

function Input({
	val,
	error,
	label,
	size,
	success,
	type,
	update,
	...props
}) {
	const inputStyles = { ...typeography.input, ...InputStyles.base, ...props.style };
	const iconColor = success ? InputStyles.successColor : InputStyles.errorColor;
	const containerStyles = {
		...InputStyles.container,
		width: size === 'fill' ? '100%' : null
	};

	let inputContainerStyles = { ...InputStyles.inputContainer };

	inputContainerStyles = error ?
		{ ...inputContainerStyles, ...InputStyles.error } : inputContainerStyles;

	inputContainerStyles = success ?
		{ ...inputContainerStyles, ...InputStyles.success } : inputContainerStyles;

	inputContainerStyles = type === 'textarea' ?
		{ ...inputContainerStyles, ...InputStyles.textarea } : inputContainerStyles;

	inputContainerStyles = type === 'range' ?
		{ ...inputContainerStyles, ...InputStyles.range } : inputContainerStyles;

	return (
		<Container  fill={false} {...props}>
			<div style={ containerStyles }>
				{!label ? null :
					<label style={ InputStyles.label }>{label}</label>}

					<div style={ inputContainerStyles }>
						{(() => {
							 switch (type) {
								 case 'textarea': return <InputTextArea {...props} style={ inputStyles } />;
								 case 'checkbox': return <InputCheckbox {...props} style={ inputStyles } />;
								 case 'range': return <InputRange {...props} />;
								 default: return <InputText {...props} style={ inputStyles } />;
							 }
						 })()}
					</div>
					{!success && !error ? null :
						<Container
							fill={false}
							style={InputStyles.icon}
							update={update}
						>
							{<Icon type="check" color={iconColor} />}
						</Container>}
			</div>
		</Container>
	);
}

Input.displayName = 'Input';

Input.propTypes = {
	defaultValue: PropTypes.string,
	error: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	size: PropTypes.string,
	success: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.number
};

Input.defaultProps = {
	type: 'text'
};

export default Input;
