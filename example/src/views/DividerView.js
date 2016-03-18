import React, {Component} from 'react';
import {Container, Heading, List, Menu, Divider} from '../../../src';
import {Example} from '../components';

export default class DividerView extends Component {

	static displayName = 'DividerView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Dividers</Heading>
				</Container>
				<Example heading='Divider (horizontal)'>
					<Divider />
				</Example>
				<Example heading='Divider (horizontal)'>
					<List style={{width: '300px'}} itemStyle={{margin: '1em 0'}}>
						<span>Item 1</span>
						<Divider />
						<span>Item 2</span>
						<span>Item 3</span>
					</List>
				</Example>
				<Example heading='Divider (horizontal)'>
					<Menu type={2} style={{width: '300px'}} menuItemStyle={{margin: '1em 0'}}>
						<span>Item 1</span>
						<Divider />
						<span>Item 2</span>
						<span>Item 3</span>
					</Menu>
				</Example>
			</Container>
		);
	}
}
