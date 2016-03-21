import React, {Component} from 'react';
import {Container, Heading, Toolbar, Button} from '../../../src';
import {Example} from '../components';

export default class ToolbarView extends Component {

	static displayName = 'ToolbarView'

	render() {
		return (
			<Container>
				<Container>
					<Heading>Toolbars</Heading>
				</Container>
				<Example heading='Toolbar (default)'>
					<Toolbar>
						<Button bt='link' color='white' href='/'>Home</Button>

						<Button bt='link' color='white'>About</Button>
						<Button bt='link' color='white' style={{flex: 1, textAlign: 'right'}}>Login</Button>
					</Toolbar>
				</Example>
				<Example heading='Toolbar (custom)'>
					<Toolbar backgroundColor='gray'>
						<Button bt='link' color='red' href='/'>Home</Button>
						<Button bt='link' color='red'>About</Button>
						<Button bt='link' color='red' style={{flex: 1, textAlign: 'right'}}>Login</Button>
					</Toolbar>
				</Example>
			</Container>
		);
	}
}
