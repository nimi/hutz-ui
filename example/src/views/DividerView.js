import React, {Component} from 'react';
import {Divider} from '../../../src';
import {Example} from '../components';

export default class DividerView extends Component {

	static displayName = 'DividerView'

	render() {
		return (
			<Example heading='Divider (horizontal)'>
				<Divider />
			</Example>
		);
	}
}
