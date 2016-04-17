import React from 'react';
import {FlexBox, Box, Button, Text} from '../../../src';
import {Logo} from '../components';

export default class HomeView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box style={{margin: 'auto'}}>
				<Logo large />
				<Text style={style.text}>
					Stateless, functional UI components built for React
				</Text>
				<FlexBox my={3} justify='center'>
					<Button
						href='https://ni.cholas.me/hutz-ui'
						color='black'
						style={{marginRight: 10}}
					>
						Github
					</Button>
					<Button href='#/alerts'>View docs</Button>
				</FlexBox>
			</Box>
		);
	}
}

const style = {
	text: {
		fontStyle: 'italic',
		color: '#8C8C8C',
		fontSize: 20
	}
};
