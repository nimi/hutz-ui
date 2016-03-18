import React, { Component } from 'react';
import { Select, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class SelectView extends Component {

	static displayName = 'Selects'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Selects</Heading>
				</Container>
				<Example heading='Dropdown (simple)'>
					<Select
						col={6}
						options={Array.from(Array(10).keys()).map((_, i) => {
								return { label: `some value ${i}`, value: i };
							})}
						label='Some dropdown label'
						name='dropdown'
					/>
				</Example>
			</Container>
		);
	}
}
