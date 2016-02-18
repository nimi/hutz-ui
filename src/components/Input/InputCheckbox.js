import React, { PropTypes } from 'react';

function InputCheckbox({
	checked,
	...props
}) {
	return (
		<input
			checked={ checked }
			type='checkbox'
			{ ...props }
		/>
	);
}

InputCheckbox.propTypes = {
	checked: PropTypes.bool,
	style: PropTypes.object
};

InputCheckbox.defaultProps = {
	checked: false
};

export default InputCheckbox;
