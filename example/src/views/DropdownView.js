import React, { Component } from 'react';
import { Dropdown, DropdownMenu, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class DropdownView extends Component {

	static displayName = 'DropdownView'

	constructor() {
		super();

		this.state = {
			dropdownOpen: false
		};
	}

	_toggleDropdown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>Dropdowns</Heading>
				</Container>
				<Example heading='Dropdown'>
					<Dropdown
						onClick={() => this._toggleDropdown()}
						buttonLabel='Cool Dropdown'
					>
						<DropdownMenu open={this.state.dropdownOpen}>
							<a href='#'>Item 1</a>
							<a href='#'>Item 2</a>
						</DropdownMenu>
					</Dropdown>
				</Example>
			</Container>
		);
	}
}
