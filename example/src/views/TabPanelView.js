import React, { Component } from 'react';
import { TabPanel, Tab, Container, Heading, Text, Input } from '../../../src';
import {Example} from '../components';

export default class TabPanelView extends Component {

	static displayName = 'TabPanelView'

	constructor() {
		super();

		this.state = {
			activeIndex: 0
		};
	}

	setActiveTab(e, index) {
		e.preventDefault();

		this.setState({
			activeIndex: index
		});
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>TabPanels</Heading>
				</Container>
				<Example heading='TabPanel'>
					<TabPanel activeIndex={this.state.activeIndex} backgroundColor='green'>
						<Tab
							label='Tab 1'
							onClick={e => this.setActiveTab(e, 0)}
						>
							<Container p={3}>
								<Heading size={2}>tab 1 content</Heading>
								<Text>
									I used to be with it, but then they changed what "it" was,and now what I'm with isn't it. And what's "it" seems weird and scary to me.
								</Text>
							</Container>
						</Tab>
						<Tab
							label='Tab 2'
							onClick={e => this.setActiveTab(e, 1)}
						>
							<Container p={3}>
								<Heading size={2}>tab 2 content</Heading>
								<Text>
									Hi, you've reached the Corey Hotline -- $4.95 a minute. Here are some words that rhyme with Corey: gory, story, allegory, Montessori...
								</Text>
							</Container>
						</Tab>
						<Tab
							label='Tab 3'
							onClick={e => this.setActiveTab(e, 2)}
						>
							<Container p={3}>
								<Heading size={2}>tab content 3</Heading>
							</Container>
						</Tab>
					</TabPanel>
				</Example>
			</Container>
		);
	}
}
