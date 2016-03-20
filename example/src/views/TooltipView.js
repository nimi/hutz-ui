import React, {Component} from 'react';
import {Container, Heading, Tooltip} from '../../../src';
import {Example} from '../components';

export default class TooltipView extends Component {

	static displayName = 'TooltipView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Tooltips</Heading>
				</Container>
				<Example heading='Tooltip'>
					<Tooltip
						text='It was the best of times, it was the blurst of times'
					>
						<Heading size={3}>Tooltip Demo</Heading>
					</Tooltip>
				</Example>
				<Example heading='Tooltip (custom color)'>
					<Tooltip
						text='It was the best of times, it was the blurst of times'
						backgroundColor='rgba(30, 200, 195, 0.4)'
						color='purple'
					>
						<p>Tooltip Demo</p>
					</Tooltip>
				</Example>
				<Example heading='Tooltip (custom color)'>
					<Tooltip
						text='It was the best of times, it was the blurst of times'
						width={200}
					>
						<p>Tooltip Demo</p>
					</Tooltip>
				</Example>
			</Container>
		);
	}
}
