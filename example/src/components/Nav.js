import React from 'react';
import radium from 'radium';
import { Menu, MenuItem } from '../../../src/Components';
import { Link, IndexLink } from 'react-router';

const L = radium(Link);
const IL = radium(IndexLink);

const navStyle = {
	container: {
		position: 'fixed',
		width: 'inherit',
		height: '100%',
		backgroundColor: '#0E0E0E'
	},
	header: {
		paddingLeft: '25px',
		paddingBottom: '25px',
		paddingTop: '20px'
	},
	list: {
		listStyleType: 'none',
		margin: 0,
		padding: 0
	}
};

export default class Nav extends React.Component {

	static displayName = 'Buttons'

	handleRoute(e, path) {
		this.context.router.transitionTo(path);
	}

	render() {
		return (
			<nav style={navStyle.container}>
				<h2 style={navStyle.header}>
					<IL to="/">
						HUTZ UI
					</IL>
				</h2>
				<Menu type={3} px={2}>
					<L to="/buttons">Buttons</L>
					<L to="/inputs">Inputs</L>
					<L to="/selects">Selects</L>
					<L to="/lists">Lists</L>
					<L to="/menus">Menus</L>
					<L to="/flexbox">Flexbox</L>
				</Menu>
			</nav>
		);
	}
}
