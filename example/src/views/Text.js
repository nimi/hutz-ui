import React, { Component } from 'react';
import { Text, Heading, Container } from '../../../src/components';
import { Example } from '../components';

export default class TextView extends Component {

	static displayName = 'Selects'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Text</Heading>
				</Container>
				<Container>
					<Example heading='Text'>
						<Text
							content={`You'll release the dogs, or the bees,
									 or the dogs with bees in their mouths, and when they bark,
									 they shoot bees at you?`}
						/>
					</Example>
					<Example heading='Text (w/ capitalization)'>
						<Text
							caps
							content={`You'll release the dogs, or the bees,
									 or the dogs with bees in their mouths, and when they bark,
									 they shoot bees at you?`}
						/>
					</Example>
					<Example heading='Text (w/centering)'>
						<Text
							center
							content={`You'll release the dogs, or the bees,
									 or the dogs with bees in their mouths, and when they bark,
									 they shoot bees at you?`}
						/>
					</Example>
				</Container>
			</Container>
		);
	}
}
