import React from 'react';

function Input({
	defaultValue,
	placeHolder,
	handleFocus,
	handleBlur,
	handleChange,
	baseStyles,
	style
}) {
	console.log('input text');

	return (
		<input
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ { ...baseStyles, ...style } }
			type='text'
		/>
	);
}

export default Input;
