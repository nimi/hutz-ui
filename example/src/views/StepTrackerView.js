import React, {Component} from 'react';
import {Container, FlexBox, Heading, Button, ButtonGroup, StepTracker} from '../../../src';
import {Example} from '../components';

export default class StepTrackerView extends Component {

	constructor() {
		super();

		this.state = {
			activeIndex: -1
		};
	}

	static displayName = 'StepTrackerView';

	static defaultProps = {
		steps: [
			{type: 'text', item: {name: 'Wake up', href: '#!'}},
			{type: 'text', item: {name: 'Go to Moe\'s', href: '#!'}},
			{type: 'text', item: {name: 'Go to the plant', href: '#!'}},
			{type: 'text', item: {name: 'See marge', href: '#!'}}
		]
	}

	next() {
		const {activeIndex} = this.state;
		const index = activeIndex <= this.props.steps.length - 1 ?
			activeIndex + 1 : this.props.steps.length;

		this.setState({activeIndex: index});
	}

	previous() {
		const {activeIndex} = this.state;
		const index = activeIndex > 0 ? activeIndex - 1 : 0;

		this.setState({activeIndex: index});
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>StepTrackers</Heading>
				</Container>
				<Example heading='StepTracker (default)'>
					<StepTracker
						steps={this.props.steps}
					/>
				</Example>
				<Example heading='StepTracker (default)'>
					<StepTracker
						steps={this.props.steps}
						active={this.state.activeIndex}
					/>
					<Container mt={4} style={{textAlign: 'center'}}>
						<ButtonGroup>
							<Button onClick={() => this.previous()}>Previous</Button>
							<Button onClick={() => this.next()} color='green'>Continue</Button>
						</ButtonGroup>
					</Container>
				</Example>
			</Container>
		);
	}
}
