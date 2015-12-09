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
	console.log(baseStyles);
	return (
		<input
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ baseStyles }
			type='text'
		/>
	);
}

export default Input;
