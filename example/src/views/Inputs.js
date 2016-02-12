import React from 'react';
import { FlexBox, Box, Input, Heading } from '../../../src/components';
import { Example } from '../components';

export default class Home extends React.Component {

	constructor() {
		super();

		this.state = {
			horizRangeVal: 0,
			vertRangeVal: 0,
			rangeActive: false
		};
	}

	renderInput(moreProps = {}) {
		const baseProps = { type: 'text' };
		const props = { ...baseProps, ...moreProps };

		return <Input { ...props } />;
	}

	updateHorizRange(position) {
		this.setState({ horizRangeVal: position });
	}

	updateVertRange(position) {
		this.setState({ vertRangeVal: position });
	}

	render() {
		const inputTextProps = {
			size: 'fill',
			placeholder: 'Some placeholder text'
		};

		return (
			<FlexBox direction='column'>
				<Box>
					<Heading>Inputs</Heading>
				</Box>

				<Box>
					<Example heading='Text Input'>
						{ this.renderInput(inputTextProps) }
					</Example>
					<Example heading='Text Input w/ label'>
						{ this.renderInput({
							...inputTextProps,
							label: 'Some Cool Label'
						}) }
					</Example>
					<Example heading='Text Input w/ success'>
						{ this.renderInput({
							...inputTextProps,
							success: true
						}) }
					</Example>
					<Example heading='Text Input w/ success'>
						{ this.renderInput({
							...inputTextProps,
							error: true
						}) }
					</Example>
					<Example heading='TextArea Input'>
						{ this.renderInput({
							size: 'fill',
							type: 'textarea'
						}) }
					</Example>
					<Example heading='Range Input (Horizontal)'>
						{ this.renderInput({
							  type: 'range',
							  val: this.state.horizRangeVal,
							  update: (pos) => this.updateHorizRange(pos),
							  max: 50
						}) }
					</Example>
					<Example heading='Range Input (Vertical)'>
						{ this.renderInput({
							  type: 'range',
							  val: this.state.vertRangeVal,
							  update: (pos) => this.updateVertRange(pos),
							  orient: 'vertical'
						}) }
					</Example>

				</Box>
			</FlexBox>
		);
	}
}
