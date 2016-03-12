import React, { Component, PropTypes } from 'react';
import { Box, FlexBox, Button, Text, Heading } from '../../../src';
import jsxStringify from '../utils/jsxToString';
import Highlight from 'react-highlight';

export default class Example extends Component {

	static displayName = 'Buttons'

	static propTypes = {
		expanded: PropTypes.bool,
		heading: PropTypes.string
	}

	constructor(props) {
		super(props);

		this.state = { expanded: false };
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		const expanded = !this.state.expanded;
		this.setState({ expanded });
	}

	renderCode(component) {
		const code = jsxStringify(
			component
		);

		return <Highlight>{ code }</Highlight>;
	}

	renderComponentWithCode(component) {
		const codeStyle = {
			display: this.state.expanded ? 'block' : 'none'
		};

		return (
			<FlexBox direction='column'>
				<Box>
					<FlexBox style={{backgroundColor: 'rgb(234, 234, 234)' }}>
						<Box px={3} py={1}>
							<Heading size={2} style={{margin: '0.4em 0'}}>
								{this.props.heading}
							</Heading>
						</Box>
						<Box pr={3} py={1} style={{textAlign: 'right'}}>
							<Button
								bt='link'
								color='black'
								onClick={this.handleClick}
								fill>
									{'< / >'}
							</Button>
						</Box>
					</FlexBox>
				</Box>
				<Box
					style={{
							backgroundColor: 'rgb(255, 255, 255)',
							border: 'solid 2px rgb(234, 234, 234)'
						}}
				>
					<Box style={codeStyle} px={2}>
						{ this.renderCode(component) }
					</Box>
					<FlexBox justify='space-around' wrap>
						<Box p={3}>{component}</Box>
					</FlexBox>
				</Box>
				<Box py={2} />
			</FlexBox>
		);
	}

	render() {
		return (
			<Box>
				{ this.renderComponentWithCode(this.props.children) }
			</Box>
		);
	}
}
