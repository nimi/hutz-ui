import React from 'react';
import { Block } from '../components';
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
				<Block height='200px' color={null}>
					<h2>FlexBox</h2>
				</Block>
				<Block height='400px' color='#eee' p={1}>
					<FlexBox wrap>
						{range(1, 12).map((_, i) =>
							<Box col={(i % 2 === 0 ? 13 - i : i)} p={1}>
								<Block height='25px' color='#efe' />
							</Box>
						)}
					</FlexBox>
				</Block>
				<Box>
					{ this.renderCode(
						<FlexBox wrap>
							{range(1, 12).map((_, i) =>
								<Box col={(i % 2 === 0 ? 12 - i : i)} p={1}>
									<Block height='25px' color='#efe' name='block' />
								</Box>
							)}
						</FlexBox>
					) }
				</Box>
			</FlexBox>
		);
	}
}
