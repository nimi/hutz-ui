import React, {Component} from 'react';
import {Container, Heading, Breadcrumbs} from '../../../src';
import {Example} from '../components';

export default class BreadcrumbsView extends Component {

	static displayName = 'BreadcrumbsView'

	static defaultProps = {
		links: [{
			type: 'link',
			item: {
				href: '/#',
				name: 'Television'
			}
		}, {
			type: 'link',
			item: {
				href: '/#',
				name: 'Comedy'
			}
		}, {
			type: 'link',
			item: {
				href: '/#',
				name: 'Simpsons, The'
			}
		}]
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>Breadcrumbs</Heading>
				</Container>
				<Example heading='Breadcrumbs (default)'>
					<Breadcrumbs links={this.props.links} />
				</Example>
			</Container>
		);
	}
}
