import React from 'react';

function InputTextArea({
	defaultValue,
	placeHolder,
	...props
}) {
	return (
		<textarea
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			{ ...props }
		/>
	);
}

export default InputTextArea;
