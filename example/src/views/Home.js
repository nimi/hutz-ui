import React from 'react';
import jsxStringify from '../utils/jsxToString';
import { Input, Button, FlexBox, Box } from '../../../src/components';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	onClick() {
		console.log('click', this);
	}

	render() {
		return (
			<Box>

				<h2>Buttons</h2>

				<FlexBox>
					<Box style={{ margin: '10px 20px 10px 0' }}>
						<h3>Disabled</h3>
						<Button disabled={true}>Button</Button>
					</Box>
					<Box style={{ margin: '10px 20px 10px 0' }}>
						<h3>Primary</h3>
						<Button onClick={ () => this.onClick() }>Button</Button>
					</Box>
					<Box style={{ margin: '10px 20px 10px 0' }}>
						<h3>Positive</h3>
						<Button
							status='positive'
							onClick
						>
							Button
						</Button>
					</Box>
					<Box style={{ margin: '10px 20px 10px 0' }}>
						<h3>Negative</h3>
						<Button
							status='negative'>
							Button
						</Button>
					</Box>
				</FlexBox>

				<h2>Text Input</h2>

				<FlexBox>
					<Box>
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
					</Box>
					<Box>
						<h3>Text input w/ success</h3>
						<Input
							success={true}
							placeHolder="Some default text"
							handleChange={ (e) => console.log('changing', e) } />
						<h3>Text input w/ error</h3>
						<Input
							error={true}
							placeHolder="Some default text"
							label="Some Important Label"
							handleChange={ (e) => console.log('changing', e) } />
					</Box>
				</FlexBox>
				<FlexBox>
					<Box>
						<h3>Text area</h3>
						<Input
							type="textarea"
							placeHolder="Some default text"
							label="Textarea Label"
							handleChange={ (e) => console.log('changing', e) } />
					</Box>
				</FlexBox>

				<h2>Checkboxes</h2>
				<div>
					<h3>Single Checkbox</h3>
					<Input type='checkbox' handleChange={ () => console.log('handle change') } />
				</div>

				<h2>FlexBox Grid</h2>
				<div>
					<Box p={2}>
						<FlexBox align='center'>
							<Box py={2}>Box A</Box>
							<Box py={2} fill>Box B</Box>
						</FlexBox>
					</Box>
				</div>
			</Box>
		);
	}
}
