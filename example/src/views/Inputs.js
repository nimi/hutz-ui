import React from 'react';
import { FlexBox, Box, Input, Heading } from '../../../src/components';
import { Example } from '../components';

function maxmin(pos, min, max) {
	if (pos < min) { return min; }
	if (pos > max) { return max; }
	return pos;

}

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

	getValueFromPosition(pos) {
		let percentage, value;
		percentage = (maxmin(pos, 0, 300) / (100 || 1));
		value = 1 * Math.round(percentage * (100 - 1) / 1) + 1;

		return value;
	}

	updateRangeVal(event, slider) {
		const node = slider;
		const nodeDirection = node.left;
		const coordinate = event.clientX;
		let pos = this.getValueFromPosition(coordinate - nodeDirection);

//		console.log(nodeDirection, coordinate, pos, this.state.rangeVal, this.state.rangeVal - pos);
		this.setState({
			rangeVal: pos
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
							  update: (e, slider) => this.updateRangeVal(e, slider),
							  onMouseDown: () => this.toggleActiveRange(true),
							  onMouseUp: () => this.toggleActiveRange(false),
						}) }
					</Example>
				</Box>
			</FlexBox>
		);
	}
}
