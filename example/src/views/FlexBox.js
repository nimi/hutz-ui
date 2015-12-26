import React from 'react';
import { Block, Example } from '../components';
import { Box, FlexBox } from '../../../src/components';
import jsxStringify from '../utils/jsxToString';
import Highlight from 'react-highlight';
import { range } from 'ramda';

export default class Buttons extends React.Component {

	static displayName = 'Buttons'

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

	render() {
		let buttonProps, { status, disabled } = this.state;

		return (
			<FlexBox direction='column'>
				<Box>
					<Example heading='FlexBox Grid'>
						<FlexBox wrap width='100%'>
							{range(1, 13).map((v) =>
								<Box col={(v % 2 === 0 ? 13 - v : v)} p={1}>
									<Block height='25px' color='#efe' center>
										{(v % 2 === 0 ? 13 - v : v)}
									</Block>
								</Box>
							)}
						</FlexBox>
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
