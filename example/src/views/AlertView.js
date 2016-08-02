import React, {Component} from 'react';
import {Container, Heading, Alert} from '../../../src';
import {Example} from '../components';

export default class AlertView extends Component {

	static displayName = 'AlertView'

	render() {
		return (
			<Container>
				<Container tagName={0}>
					<Heading>Alerts</Heading>
				</Container>
				<Example heading='Alert (default)'>
					<Alert message='This is a generic alert message.' />
				</Example>
				<Example heading='Alert (success)'>
					<Alert message='This is a success alert message.' type='success' />
				</Example>
				<Example heading='Alert (warning)'>
					<Alert message='This is a warning alert message.' type='warning' />
				</Example>
				<Example heading='Alert (error)'>
					<Alert message='This is a generic alert message.' type='error' />
				</Example>
			</Container>
		);
	}
}
