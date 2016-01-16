import React from 'react';
import { FlexBox, Box, Input, Heading } from '../../../src/components';
import { Example } from '../components';

export default class Home extends React.Component {

	onClick() {
		console.log('click', this);
	}

	renderInput(moreProps = {}) {
		const baseProps = {
			type: 'text',
			placeholder: 'Some placeholder text'
		};

		const props = { ...baseProps, ...moreProps };

		return (
			<Input { ...props } />
		);
	}

	render() {
		return (
			<FlexBox direction='column'>
				<Box>
					<Heading>Inputs</Heading>
				</Box>

				<Box>
					<Example heading='Text Input'>
						{ this.renderInput({ size: 'fill' }) }
					</Example>
					<Example heading='Text Input w/ label'>
						{ this.renderInput({
							size: 'fill',
							label: 'Some Cool Label'
						}) }
					</Example>
					<Example heading='Text Input w/ success'>
						{ this.renderInput({
							size: 'fill',
							success: true
						}) }
					</Example>
					<Example heading='Text Input w/ success'>
						{ this.renderInput({
							size: 'fill',
							error: true
						}) }
					</Example>
					<Example heading='TextArea Input'>
						{ this.renderInput({
							size: 'fill',
							type: 'textarea'
						}) }
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
