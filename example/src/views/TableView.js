import React, {Component} from 'react';
import {Container, Heading, Table} from '../../../src';
import {Example} from '../components';

export default class TableView extends Component {

	static displayName = 'TableView'

	static defaultProps = {
		headings: ['first name', 'last name', 'location', 'occupation'],
		data: [
			['Bart', 'Simpson', 'Springfield', 'student'],
			['Marge', 'Simpson', 'Springfield', 'homemaker'],
			['Maggie', 'Simpson', 'Springfield', 'student'],
			['Homer', 'Simpson', 'Springfield', 'nuclear safety inspector'],
			['Lisa', 'Simpson', 'Springfield', 'unemployed']
		]
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>Tables</Heading>
				</Container>
				<Example heading='Table (default)'>
					<Table
						headings={this.props.headings}
						data={this.props.data}
					/>
				</Example>
				<Example heading='Table (with numbering)'>
					<Table
						headings={this.props.headings}
						data={this.props.data}
						number
					/>
				</Example>
			</Container>
		);
	}
}
