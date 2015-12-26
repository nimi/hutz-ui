import React, { PropTypes } from 'react';

function InputText({
	defaultValue,
	placeHolder,
	baseStyles,
	style,
	...props
}) {
	return (
		<input
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			style={ { ...baseStyles, ...style } }
			type='text'
			{ ...props }
		/>
	);
}

InputText.propTypes = {
	baseStyles: PropTypes.object,
	defaultValue: PropTypes.string,
	placeHolder: PropTypes.string,
	style: PropTypes.object
};

InputText.defaultProps = {
	style: {}
};

export default InputText;
