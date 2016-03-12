import React, { PropTypes } from 'react';
import radium from 'radium';

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

export default radium(InputText);
