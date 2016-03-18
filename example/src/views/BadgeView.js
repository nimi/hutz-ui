import React, { Component } from 'react';
import { Heading, Text, Badge, Container } from '../../../src';
import { Example } from '../components';

export default class BadgeView extends Component {

	static displayName = 'Badges'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Badges</Heading>
				</Container>
				<Container>
					<Example heading='Badge'>
						<Container>
							<Container>
								<Badge mx={1}>Cool</Badge>
								<Badge backgroundColor='green' mx={1}>Great</Badge>
								<Badge backgroundColor='yellow' mx={1}>Careful</Badge>
								<Badge backgroundColor='red' mx={1}>Bad</Badge>
								<Badge backgroundColor='purple' mx={1}>Neat</Badge>
								<Badge backgroundColor='orange' mx={1}>Woah</Badge>
							</Container>
						</Container>
					</Example>
					<Example heading='Badge (rounded)'>
						<Container>
							<Container>
								<Badge mx={1} round>Cool</Badge>
								<Badge backgroundColor='green' mx={1} round>Great</Badge>
								<Badge backgroundColor='yellow' mx={1} round>Careful</Badge>
								<Badge backgroundColor='red' mx={1} round>Bad</Badge>
								<Badge backgroundColor='purple' mx={1} round>Neat</Badge>
								<Badge backgroundColor='orange' mx={1} round>Woah</Badge>
							</Container>
						</Container>
					</Example>
					<Example heading='Badge (rounded)'>
						<Container>
							<Container>
								<Badge mx={1} circle>1</Badge>
								<Badge backgroundColor='green' mx={1} circle>2</Badge>
								<Badge backgroundColor='yellow' mx={1} circle>3</Badge>
								<Badge backgroundColor='red' mx={1} circle>4</Badge>
								<Badge backgroundColor='purple' mx={1} circle>5</Badge>
								<Badge backgroundColor='orange' mx={1} circle>6</Badge>
							</Container>
						</Container>
					</Example>
				</Container>
			</Container>
		);
	}
}
