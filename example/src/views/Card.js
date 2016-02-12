import React, {Component} from 'react';
import {Card, Container, Heading} from '../../../src/components';
import {Example} from '../components';

export default class CardView extends Component {

	static displayName = 'CardView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>
						Cards
					</Heading>
				</Container>
				<Container>
					<Example heading='Card'>
						<Card />
					</Example>
				</Container>
			</Container>
		);
	}
}
