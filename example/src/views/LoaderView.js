import React, {Component} from 'react';
import {Container, List, Menu, Loader} from '../../../src';
import {Example} from '../components';

export default class LoaderView extends Component {

	static displayName = 'LoaderView'

	render() {
		return (
			<Container>
				<Example heading='Loader'>
					<Loader />
				</Example>
			</Container>
		);
	}
}
