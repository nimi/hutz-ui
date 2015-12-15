import React from 'react';
import { Input } from '../../../src/components';

export default class Home extends React.Component {

	onClick() {
		console.log('click', this);
	}

	render() {
		return (
			<div>
				<h2>Text Input</h2>

				<div style={{ width: '300px' }}>
					<h3>Normal text input</h3>
					<Input
						type="text"
						placeHolder="Some default text"
						handleChange={ (e) => console.log('changing', e) } />
					<h3>Normal text input w/ label</h3>
					<Input
						label="Example Label"
						placeHolder="Some other default text"
						handleChange={ (e) => console.log('changing', e) } />
					<h3>Text input w/ success</h3>
					<Input
						success={true}
						placeHolder="Some default text"
						handleChange={ (e) => console.log('changing', e) } />
					<h3>Text input w/ error</h3>
					<Input
						error="Yikes!"
						placeHolder="Some default text"
						handleChange={ (e) => console.log('changing', e) } />
					<h3>Textarea</h3>
					<Input type="textarea"/>
				</div>
				
			</div>
		);
	}
}
