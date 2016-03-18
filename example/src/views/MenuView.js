import React, { Component } from 'react';
import { Container, Heading, Menu, MenuItem } from '../../../src';
import { Example} from '../components';

export default class MenuView extends Component {

	static displayName = 'Menus';

	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
		};
	}


	handleMenuItemClick(activeIndex, e) {
		e.preventDefault();
		this.setState({ activeIndex });
	}

	render() {
		return (
			<div>
				<Container>
					<Heading>Icons</Heading>
				</Container>
				<Example heading='Menu - default (inline)'>
					<Menu inline>
						<a href='#'>Menu item 1</a>
						<a href='#'>Menu item 2</a>
						<a href='#'>Menu item 3</a>
					</Menu>
				</Example>
				<Example heading='Menu - borderless (inline)'>
					<Menu inline type={2}>
						<a href='#'>Menu item 1</a>
						<a href='#'>Menu item 2</a>
						<a href='#'>Menu item 3</a>
					</Menu>
				</Example>
				<Example heading='Menu with active item (inline)'>
					<Menu inline activeIndex={this.state.activeIndex} type={2}>
						<a href='#' onClick={(e) => this.handleMenuItemClick(0, e)}>Menu item 1</a>
						<a href='#' onClick={(e) => this.handleMenuItemClick(1, e)}>Menu item 2</a>
						<a href='#' onClick={(e) => this.handleMenuItemClick(2, e)}>Menu item 3</a>
					</Menu>
				</Example>
				<Example heading='Menu - default (vertical)'>
					<Menu>
						<a href='#'>Menu item 1</a>
						<a href='#'>Menu item 2</a>
						<a href='#'>Menu item 3</a>
					</Menu>
				</Example>
				<Example heading='Menu - borderless (vertical)'>
					<Menu type={2}>
						<a href='#'>Menu item 1</a>
						<a href='#'>Menu item 2</a>
						<a href='#'>Menu item 3</a>
					</Menu>
				</Example>
				<Example heading='Menu - text (vertical)'>
					<Menu type={3}>
						<a href='#'>Menu item 1</a>
						<a href='#'>Menu item 2</a>
						<a href='#'>Menu item 3</a>
					</Menu>
				</Example>
			</div>
		);
	}
}
