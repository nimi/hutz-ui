import React, { Component } from 'react';
import { Heading, Banner, Container } from '../../../src';
import { Example } from '../components';

export default class BannerView extends Component {

	static displayName = 'Banners'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Banners</Heading>
				</Container>
				<Container>
					<Example heading='Banner (centered)'>
						<Container>
							<Banner
								image='https://pixabay.com/static/uploads/photo/2015/07/27/18/51/mountains-863048_960_720.jpg'
								align='center'
							>
								<Heading>Cool Banner</Heading>
							</Banner>
						</Container>
					</Example>
				</Container>
			</Container>
		);
	}
}
