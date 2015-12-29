import React, { Component } from 'react';
import { Select } from '../../../src/components';

export default class SelectView extends Component {

	static displayName = 'Selects'

	render() {
		return (
			<Select
				options={Array.from(Array(10).keys()).map((_, i) => {
					return { label: `some value ${i}`, value: i };
				})}
				label='Some dropdown label'
				name='dropdown'
			/>
		);
	}
}
