import React, {Component} from 'react';
import {Container, Heading, Switch} from '../../../src';
import {Example} from '../components';

export default class SwitchView extends Component {

	constructor() {
		super();

		this.state = {
			defaultActive: false,
			purpleActive: false
		};
	}

	static displayName = 'SwitchView';

	toggleDefault(e) {
		e.preventDefault();
		this.setState({defaultActive: !this.state.defaultActive});
	}

	togglePurple(e) {
		e.preventDefault();
		this.setState({purpleActive: !this.state.purpleActive});
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>Switches</Heading>
				</Container>
				<Example heading='Switch (default)'>
					<Switch
						active={this.state.defaultActive}
						onClick={(e) => this.toggleDefault(e)}
					/>
				</Example>
				<Example heading='Switch (w/ active color)'>
					<Switch
						active={this.state.purpleActive}
						activeColor='purple'
						onClick={(e) => this.togglePurple(e)}
					/>
				</Example>
			</Container>
		);
	}
}
