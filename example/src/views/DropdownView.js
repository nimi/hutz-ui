import React, { Component } from 'react';
import { Dropdown, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class DropdownView extends Component {

	static displayName = 'DropdownView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Dropdowns</Heading>
				</Container>
				<Example heading='Dropdown'>
					<Dropdown />
				</Example>
			</Container>
		);
	}
}
