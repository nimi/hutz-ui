import React, {Component} from 'react';
import {Card, Container, FlexBox, Heading} from '../../../src';
import {Example} from '../components';

export default class CardView extends Component {

	static displayName = 'CardView'

	static defaultProps = {
		title: 'Card title',
		subtitle: 'Card has subtitle',
		imgSrc: 'http://www.adweek.com/files/imagecache/node-detail/news_article/hans-moleman-hed-2012.jpg',
		text: `Although seemingly elderly, Hans Moleman once claimed that he
		   was only 31 years old, implying in the process that his appearance
		   is due to heavy drinking and not a result of old age.`,
		actions: [
			{ name: 'Link 1', action: () => console.log('clicky') },
			{ name: 'Link 2', action: () => console.log('clicky') }
		]
	}

	getCardProps({title, subtitle, imgSrc, actions, text}) {
		return {
			title, subtitle, imgSrc, actions, text
		};
	}

	render() {
		const  props = this.getCardProps(this.props);

		return (
			<Container>
				<Container>
					<Heading>
						Cards
					</Heading>
				</Container>
				<Container>
					<Example heading='Card'>
						<Card {...props} />
					</Example>
					<Example heading='Card'>
						<FlexBox>
							<Card {...props} style={{margin: '0 0.2em'}} />
							<Card {...props} style={{margin: '0 0.2em'}} />
							<Card {...props} style={{margin: '0 0.2em'}} />
						</FlexBox>
					</Example>
				</Container>
			</Container>
		);
	}
}
