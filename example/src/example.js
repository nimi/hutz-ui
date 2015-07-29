import React from 'react';
import { TextInput, Button } from 'components';
import Radium from 'radium';

@Radium
class App extends React.Component {

	onClick() {
		console.log('click');
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
					<h3>Normal input</h3>
					<TextInput
						placeHolder="Some default text" />
					<h3>Normal input w/ label</h3>
					<TextInput
						label="Example Label"
						placeHolder="Some default text" />
					<h3>Input w/ success</h3>
					<TextInput
						success="true"
						placeHolder="Some default text" />
					<h3>Input w/ error</h3>
					<TextInput
						error="Yikes!"
						placeHolder="Some default text" />
				</div>
			</div>
		);
	}
}

React.render(<App />, document.getElementById('app'));
