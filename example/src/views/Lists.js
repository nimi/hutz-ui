import React, { Component } from 'react';
import { List, ListItem } from '../../../src/components';
import { Example} from '../components';

export default class ListView extends Component {

	static displayName = 'Lists'

	render() {
		return (
			<div>
				<Example heading='List (vertical)'>
					<List py={2}>
						<span>List item 1</span>
						<span>List item 2</span>
						<span>List item 3</span>
					</List>
				</Example>
				<Example heading='List (horizontal)'>
					<List inline>
						<span>List item 1</span>
						<span>List item 2</span>
						<span>List item 3</span>
					</List>
				</Example>
			</div>
		);
	}
}
