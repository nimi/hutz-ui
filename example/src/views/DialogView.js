import React, {Component} from 'react';
import {Container, Heading, Dialog, Card, CardHeader, Button, Icon} from '../../../src';
import {Example} from '../components';

export default class DialogView extends Component {

	static displayName = 'DialogView'

	static defaultProps = {
		title: 'Card title',
		imgSrc: 'http://www.adweek.com/files/imagecache/node-detail/news_article/hans-moleman-hed-2012.jpg',
		actions: [
			{ name: 'Link 1', action: () => console.log('clicky') },
		]
	}

	constructor() {
		super();

		this.state = {
			isOpen: false
		};
	}

	closeDialog() {
		this.setState({isOpen: false});
	}

	openDialog() {
		this.setState({isOpen: true});
	}

	render() {
		const { title, imgSrc, actions} = this.props;
		const props = { title, imgSrc, actions };

		return (
			<Container>
				<Container>
					<Heading>Dialogs</Heading>
				</Container>
				<Example heading='Dialog (default)'>
					<Container>
						<Button onClick={() => this.openDialog()}>Open Dialog</Button>
						<Dialog
							onClose={() => this.closeDialog()}
							open={this.state.isOpen}
						>
							<Card {...props} backgroundColor='white'>
								<CardHeader>
									Dialog
								</CardHeader>
							</Card>
						</Dialog>
					</Container>
				</Example>
			</Container>
		);
	}
}
