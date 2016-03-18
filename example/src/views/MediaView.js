import React, {Component} from 'react';
import {Media, Container, FlexBox, Heading} from '../../../src';
import {Example} from '../components';

export default class MediaView extends Component {

	static displayName = 'MediaView'

	static defaultProps = {
		imgSrc: 'http://www.adweek.com/files/imagecache/node-detail/news_article/hans-moleman-hed-2012.jpg'
	}

	render() {
		return (
			<Container>
				<Container>
					<Heading>
						Media
					</Heading>
				</Container>
				<Container>
					<Example heading='Media (image)'>
						<Media src={this.props.imgSrc} />
					</Example>
				</Container>
			</Container>
		);
	}
}
