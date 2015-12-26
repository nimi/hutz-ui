import React, { PropTypes } from 'react';

function InputCheckbox({
	checked,
	baseStyles,
	style,
	...props
}) {
	return (
		<input
			checked={ checked }
			style={ { ...baseStyles, ...style } }
			type='checkbox'
			{ ...props }
		/>
	);
}

InputCheckbox.propTypes = {
	baseStyles: PropTypes.object,
	checked: PropTypes.bool,
	style: PropTypes.object
};

InputCheckbox.defaultProps = {
	checked: false,
	style: {}
};

export default InputCheckbox;
