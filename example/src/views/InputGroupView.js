import React, { Component } from 'react';
import { InputGroup, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class InputGroupView extends Component {

	static displayName = 'InputGroupView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>InputGroups</Heading>
				</Container>
				<Example heading='InputGroup'>
					<InputGroup />
				</Example>
			</Container>
		);
	}
}
