import React, {Component} from 'react';
import {Container, FlexBox, Loader, Heading} from '../../../src';
import {Example} from '../components';

export default class LoaderView extends Component {

	static displayName = 'LoaderView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Loaders</Heading>
				</Container>
				<Example heading='Loader'>
					<FlexBox>
						<Loader />
						<Loader size={100} />
						<Loader size={150} />
					</FlexBox>
				</Example>
				<Example heading='Loader'>
					<FlexBox>
						<Loader color='blue' />
						<Loader color='red' />
						<Loader color='yellow' />
						<Loader color='green' />
					</FlexBox>
				</Example>
			</Container>
		);
	}
}
