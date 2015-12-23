import React, { Component, PropTypes } from 'react';
import { Box, FlexBox, Button } from '../../../src/components';
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
		const codeStyle = this.state.expanded ?
			{ display: 'block' } : { display: 'none' };

		return (
			<FlexBox direction='column'>
				<h3 style={{ margin: '2em 0' }}>
					{ this.props.heading }
				</h3>
				<Box p={3} style={ { backgroundColor: '#FFF' } }>
					<FlexBox justify='space-around'>
						{component}
					</FlexBox>
				</Box>
				<Box py={ 1 }>
					<Button
						color='gray'
						onClick={this.handleClick}
						fill>
							view source
					</Button>
				</Box>
				<Box
					style={codeStyle}
				>
					{ this.renderCode(component) }
				</Box>
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
