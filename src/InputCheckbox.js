import React, { PropTypes } from 'react';
import { noop } from './utils';

function InputCheckbox({
	checked,
	handleFocus,
	handleBlur,
	handleChange,
	baseStyles,
	style,
	...props
}) {
	return (
		<input
			checked={ checked }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ { ...baseStyles, ...style } }
			type='checkbox'
			{ ...props }
		/>
	);
}

InputCheckbox.propTypes = {
	baseStyles: PropTypes.object,
	checked: PropTypes.bool,
	handleBlur: PropTypes.func,
	handleChange: PropTypes.func,
	handleFocus: PropTypes.func,
	style: PropTypes.object
};

InputCheckbox.defaultProps = {
	checked: false,
	handleBlur: noop,
	handleChange: noop,
	handleFocus: noop,
	style: {}
};

export default InputCheckbox;
