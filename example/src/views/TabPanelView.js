import React, { Component } from 'react';
import { TabPanel, Container, Heading } from '../../../src';
import { Example} from '../components';

export default class TabPanelView extends Component {

	static displayName = 'TabPanelView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>TabPanels</Heading>
				</Container>
				<Example heading='TabPanel'>
					<TabPanel />
				</Example>
			</Container>
		);
	}
}
