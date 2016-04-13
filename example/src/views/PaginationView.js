import React, { Component } from 'react';
import { Pagination, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class PaginationView extends Component {

	static displayName = 'PaginationView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Paginations</Heading>
				</Container>
				<Example heading='Pagination'>
					<Pagination />
				</Example>
			</Container>
		);
	}
}
