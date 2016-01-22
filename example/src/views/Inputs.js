import React from 'react';
import { FlexBox, Box, Input, Heading } from '../../../src/components';
import { Example } from '../components';

export default class Home extends React.Component {

	constructor() {
		super();

		this.state = {
			rangeVal: 2,
			rangeActive: false
		};
	}

	onClick() {
		console.log('click', this);
	}

	renderInput(moreProps = {}) {
		const baseProps = { type: 'text' };
		const props = { ...baseProps, ...moreProps };

		return <Input { ...props } />;
	}

	updateRangeVal(event) {
		console.log('df', event, event.clientX, event.pageX, event.currentTarget);
		this.setState({
			rangeVal: this.state.rangeVal + 1,
		});
	}

	toggleActiveRange(val) {
		this.setState({
			rangeActive: val
		});
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
					<Example heading='Range Input'>
						{ this.renderInput({
							  type: 'range',
							  val: this.state.rangeVal,
							  active: this.state.rangeActive,
							  update: e => this.updateRangeVal(e),
							  onMouseDown: () => this.toggleActiveRange(true),
							  onMouseUp: () => this.toggleActiveRange(false)
						}) }
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
