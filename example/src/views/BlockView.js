import React, {Component} from 'react';
import {Container, Heading, Block, Media} from '../../../src';
import {Example} from '../components';

export default class BlockView extends Component {

	static displayName = 'BlockView';

	static defaultProps = {
		imgSrc: 'http://www.adweek.com/files/imagecache/node-detail/news_article/hans-moleman-hed-2012.jpg'
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>Blocks</Heading>
				</Container>
				<Example heading='Block (with text)'>
					<Block borderLeft={true} px={2}>
						<Heading size={1}>Cool Heading</Heading>
						<Heading size={2}>Sub heading</Heading>
					</Block>
				</Example>
				<Example heading='Block (with image)'>
					<Block borderLeft={true} px={2} borderColor='yellow'>
						<Media src={this.props.imgSrc} width={300} />
					</Block>
				</Example>
			</Container>
		);
	}
}
