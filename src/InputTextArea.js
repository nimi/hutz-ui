import React from 'react';

function InputTextArea({
	defaultValue,
	placeHolder,
	handleFocus,
	handleBlur,
	handleChange,
	baseStyles,
	style
}) {
	console.log('input text area', defaultValue);

	return (
		<textarea
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ { ...baseStyles, ...style } }
		/>
	);
}

export default InputTextArea;
