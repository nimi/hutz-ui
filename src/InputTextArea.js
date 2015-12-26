import React from 'react';

function InputTextArea({
	defaultValue,
	placeHolder,
	handleFocus,
	handleBlur,
	handleChange,
	baseStyles,
	style,
	...props
}) {
	return (
		<textarea
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ { ...baseStyles, ...style } }
			{ ...props }
		/>
	);
}

export default InputTextArea;
