import React, {Component} from 'react';
import {Container, Heading, Icon} from '../../../src';
import {Example} from '../components';

export default class IconView extends Component {

	static displayName = 'IconView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Icons</Heading>
				</Container>
				<Example heading='Icon (check)'>
					<Icon type='check'/>
				</Example>
				<Example heading='Icon (check)'>
					<Icon type='close'/>
				</Example>
				<Example heading='Icon (arrow)'>
					<Icon type='arrow'/>
				</Example>
			</Container>
		);
	}
}
