import React, { Component } from 'react';
import { Select } from '../../../src/components';
import { Example} from '../components';

export default class SelectView extends Component {

	static displayName = 'Selects'

	render() {
		return (
			<Example heading='Dropdown (simple)'>
				<Select
					options={Array.from(Array(10).keys()).map((_, i) => {
							return { label: `some value ${i}`, value: i };
						})}
					label='Some dropdown label'
					name='dropdown'
				/>
			</Example>
		);
	}
}
