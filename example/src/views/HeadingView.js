import React, { Component } from 'react';
import { Text, Heading, Container } from '../../../src';
import { Example } from '../components';

export default class HeadingView extends Component {

	static displayName = 'Headers'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Headings</Heading>
				</Container>
				<Container>
					<Example heading='Heading (default)'>
						<Container>
							<Heading>This is a Cool Heading</Heading>
							<p>Body text</p>
						</Container>
					</Example>
					<Example heading='Heading (2)'>
						<Container>
							<Heading size={2}>This is a Cool Heading</Heading>
							<p>Body text</p>
						</Container>
					</Example>
					<Example heading='Heading (3)'>
						<Container>
							<Heading size={3}>This is a Cool Heading</Heading>
							<p>Body text</p>
						</Container>
					</Example>
					<Example heading='Heading (4)'>
						<Container>
							<Heading size={4}>This is a Cool Heading</Heading>
							<p>Body text</p>
						</Container>
					</Example>
				</Container>
			</Container>
		);
	}
}
