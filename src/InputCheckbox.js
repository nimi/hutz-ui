import React from 'react';

class InputCheckbox extends React.Component {
	constructor(props) {
		super(props);
	}

	static displayName = 'Checkbox'

	render() {
		return (
			<div>
				<input type="checkbox" />
			</div>
		);
	}
}

export default InputCheckbox;

