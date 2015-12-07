import React from 'react';
import { Button } from '../../../src/components';

export default class Buttons extends React.Component {

	static displayName = 'Buttons'

	constructor() {
		super();

		this.state = {
			status: 'primary',
			disabled: false
		};
	}

	handleChange(event) {
		this.setState( {status: event.target.value} );
	}

	render() {
		let buttonProps, { status, disabled } = this.state;

		let code = `<${ 'Button' }
						status="${ status }"
						disabled={${ disabled }}
					/>`;

		return (
			<div>
				<h2>Buttons</h2>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ width: '25%' }}>
						<label htmlFor="status">Status</label>
						<select onChange={ this.handleChange }>
							<option value="primary">Primary</option>
							<option value="positive">Positive</option>
							<option value="negative">Negative</option>
						</select>
					</div>
					<div style={{ width: '50%' }}>
						<Button {...buttonProps}>Button</Button>
					</div>
					<div style={{ width: '25%' }}>
						<code>{ code }</code>
					</div>
				</div>

			</div>
		);
	}
}
