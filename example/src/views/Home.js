import React from 'react';
import { Input, Button } from '../../../src/components';

export default class Home extends React.Component {

	onClick() {
		console.log('click', this);
	}

	render() {
		return (
			<div>
				<h2>Buttons</h2>

				<div style={{ display: 'flex'}}>
					<div style={{ margin: '10px 20px 10px 0' }}>
						<h3>Disabled</h3>
						<Button disabled={true}>Button</Button>
					</div>
					<div style={{ margin: '10px 20px 10px 0' }}>
						<h3>Primary</h3>
						<Button onClick={ this.onClick }>Button</Button>
					</div>
					<div style={{ margin: '10px 20px 10px 0' }}>
						<h3>Positive</h3>
						<Button
							onClick={ this.onClick }
							status='positive'>
							Button
						</Button>
					</div>
					<div style={{ margin: '10px 20px 10px 0' }}>
						<h3>Negative</h3>
						<Button
							onClick={ this.onClick }
							status='negative'>
							Button
						</Button>
					</div>
				</div>

				<h2>Text Input</h2>

				<div style={{ width: '300px' }}>
					<h3>Normal text input</h3>
					<Input
						type="text"
						placeHolder="Some default text" />
					<h3>Normal text input w/ label</h3>
					<Input
						label="Example Label"
						placeHolder="Some default text" />
					<h3>Text input w/ success</h3>
					<Input
						success={true}
						placeHolder="Some default text" />
					<h3>Text input w/ error</h3>
					<Input
						error="Yikes!"
						placeHolder="Some default text" />
					<h3>Textarea</h3>
					<Input type="textarea"/>
				</div>

				<h2>Checkboxes</h2>
				<div>
					<h3>Single Checkbox</h3>
				</div>
			</div>
		);
	}
}
