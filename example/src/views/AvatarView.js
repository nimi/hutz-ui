import React, { Component } from 'react';
import { Example } from '../components';
import { Avatar, Text } from '../../../src';

export default class AvatarView extends Component {

	static displayName = 'AvatarView'

	render() {
		return (
			<div>
				<Example heading='Avatar (letter)'>
					<div>
						<Avatar
							backgroundColor='red'
							letter='B'
							name='Bart Simpson'
						/>
					</div>
				</Example>
				<Example heading='Avatar (SVG icon)'>
					<Avatar
						backgroundColor='green'
						icon='check'
						name='Bart Simpson'
						color='white'
					/>
				</Example>
				<Example heading='Avatar (image)'>
					<Avatar
						src='https://pbs.twimg.com/profile_images/599194613392506881/YTtwkqip.jpg'
						name='Bart Simpson'
					/>
				</Example>
			</div>
		);
	}
}
