import React, { Component } from 'react';
import { Menu, MenuItem } from '../../../src/components';
import { Example} from '../components';

export default class MenuView extends Component {

	static displayName = 'Menus';
	static activeDefault = {
		oneActive: false,
		twoActive: false,
		threeActive: false
	}

	constructor(props) {
		super(props);

		this.state = {
			...MenuView.activeDefault,
			twoActive: true
		}
	}


	handleMenuItemClick(n, e) {
		const active = { [n + 'Active']: true };
		const st = { ...MenuView.activeDefault, ...active };

		this.setState(st);
	}

	render() {
		return (
			<div>
				<Example heading='Menu (inline)'>
					<Menu>
						<MenuItem name='Menu item 1' />
						<MenuItem name='Menu item 2' />
						<MenuItem name='Menu item 3' />
					</Menu>
				</Example>
				<Example heading='Menu with active item (inline)'>
					<Menu>
						<MenuItem
							name='Menu item 1'
							active={this.state.oneActive}
							onClick={() => this.handleMenuItemClick('one')}
						/>
						<MenuItem
							name='Menu item 2'
							active={this.state.twoActive}
							onClick={() => this.handleMenuItemClick('two')}
						/>
						<MenuItem
							name='Menu item 3'
							active={this.state.threeActive}
							onClick={() => this.handleMenuItemClick('three')}
						/>
					</Menu>
				</Example>
			</div>
		);
	}
}
