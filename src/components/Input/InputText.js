import React, { PropTypes } from 'react';
import radium from 'radium';

function InputText({
	defaultValue,
	placeHolder,
	...props
}) {
	return (
		<input
			defaultValue={ defaultValue }
			placeholder={ placeHolder }
			type='text'
			{ ...props }
		/>
	);
}

InputText.propTypes = {
	defaultValue: PropTypes.string,
	placeHolder: PropTypes.string
};

export default radium(InputText);
