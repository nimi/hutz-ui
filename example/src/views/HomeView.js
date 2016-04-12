import React from 'react';
import {FlexBox, Box, Button} from '../../../src';
import {Logo} from '../components';

export default class HomeView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box style={{margin: 'auto'}}>
				<Logo large />
				<FlexBox my={3} justify='center'>
					<Button
						href='https://ni.cholas.me/hutz-ui'
						color='black'
						style={{marginRight: 10}}
					>
						Github
					</Button>
					<Button href='/buttons'>View docs</Button>
				</FlexBox>
			</Box>
		);
	}
}
