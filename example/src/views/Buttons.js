import React from 'react';
import { Example } from '../components';
import { Button, ButtonGroup, Box, FlexBox } from '../../../src/components';
import jsxStringify from '../utils/jsxToString';
import Highlight from 'react-highlight';

export default class Buttons extends React.Component {

	static displayName = 'Buttons'
	static simpsons = ['Homer', 'Bart', 'Lisa', 'Marge', 'Maggie']
	static colors = ['blue', 'green', 'red', 'yellow', 'orange', 'purple']

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

		return <Highlight>{ code }</Highlight>;
	}

	renderButton(props = {}) {
		const buttonProps = { ...this.state, ...props };
		return <Button { ...buttonProps }>
			{this.randomSimpson()}
		</Button>;
	}

	renderButtons(props = {}) {
		return (
			<FlexBox justify='space-around' style={{ width: '100%' }}>
				{Buttons.colors.map(color => this.renderButton({ ...props, color }))}
			</FlexBox>);
	}

	renderButtonGroup(props = {}) {
		return (
			<ButtonGroup { ...props }>
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
					<Example heading='Basic Buttons'>
						{this.renderButtons()}
					</Example>
					<Example heading='Raised Buttons'>
						{this.renderButtons({ raised: true })}
					</Example>
					<Example heading='Button Group'>
						{this.renderButtonGroup()}
					</Example>
					<Example heading='Button Group (vertical)'>
						{this.renderButtonGroup({ vertical: true })}
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
