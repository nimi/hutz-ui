import React, { PropTypes } from 'react';

function InputText({
	defaultValue,
	placeHolder,
	type,
	...props
}) {
	return (
		<input
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			type={type || 'text'}
			{ ...props }
		/>
	);
}

InputText.propTypes = {
	defaultValue: PropTypes.string,
	placeHolder: PropTypes.string,
	type: PropTypes.string
};

export default InputText;
