import React from 'react';
import { Button, ButtonGroup, Box, FlexBox } from '../../../src/components';
import jsxStringify from '../utils/jsxToString';
import Highlight from 'react-highlight';

export default class Buttons extends React.Component {

	static displayName = 'Buttons'
	static simpsons = ['Homer', 'Bart', 'Lisa', 'Marge', 'Maggie']

	constructor() {
		super();

		this.state = {};
	}

	handleChange(event) {
		this.setState( {status: event.target.value} );
	}

	randomSimpson() {
		return Buttons.simpsons[Math.floor(Math.random() * Buttons.simpsons.length)];
	}

	renderCode(Component) {
		const code = jsxStringify(
			Component
		);

		return <Highlight>{ code }</Highlight>
	}

	renderButton(props = {}) {
		const buttonProps = { ...this.state, ...props };
		return <Button { ...buttonProps }>
			{this.randomSimpson()}
		</Button>;
	}

	renderButtonGroup() {
		return (
			<ButtonGroup vertical>
				{this.renderButton()}
				{this.renderButton()}
				{this.renderButton()}
			</ButtonGroup>
		);
	}

	renderComponentWithCode(component) {
		return (
			<FlexBox>
				<Box col={ 6 } fill={ true } align='center'>
					{component}
				</Box>
				<Box col={ 6 }>
					{ this.renderCode(component) }
				</Box>
			</FlexBox>
		);
	}

	render() {
		return (
			<FlexBox direction='column'>
				<Box col={ 3 }>
					<h2>Buttons</h2>
				</Box>
				<Box>
					<h3 style={{ marginTop: 0, marginBottom: '2em' }}>Primary Button</h3>
					{ this.renderComponentWithCode(
						this.renderButton()
					) }
					<h3 style={{ marginTop: 0, marginBottom: '2em' }}>Button Group</h3>
					{ this.renderComponentWithCode(
						this.renderButtonGroup()
					) }
				</Box>
			</FlexBox>
		);
	}
}
