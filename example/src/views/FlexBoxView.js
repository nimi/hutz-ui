import React from 'react';
import { Block, Example } from '../components';
import { Box, FlexBox, Heading } from '../../../src';
import jsxStringify from '../utils/jsxToString';
import Highlight from 'react-highlight';
import { range } from 'ramda';

export default class FlexBoxView extends React.Component {

	static displayName = 'FlexBoxView'

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

	renderCode(Component) {
		const code = jsxStringify(
			Component
		);

		return (
			<Highlight>{ code }</Highlight>
		);
	}

	renderGrid() {
		return range(1, 13).map((v, i) =>
			<Box key={i} col={(v % 2 === 0 ? 13 - v : v)} p={1}>
				<Block height='25px' color='#efe' center>
					{(v % 2 === 0 ? 13 - v : v)}
				</Block>
			</Box>
		);
	}

	render() {
		let buttonProps, { status, disabled } = this.state;

		return (
			<FlexBox direction='column'>
				<Box>
					<Heading>Layouts</Heading>
				</Box>
				<Box>
					<Example heading='FlexBox Grid'>
						<FlexBox wrap width='100%'>
							{this.renderGrid()}
						</FlexBox>
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
