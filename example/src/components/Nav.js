import React from 'react';
import radium from 'radium';
import { Menu, MenuItem, Container, Text } from '../../../src';
import { Link, IndexLink } from 'react-router';

const L = radium(Link);
const IL = radium(IndexLink);

export default class Nav extends React.Component {

	static displayName = 'Nav'

	static defaultProps = {
		navItems: [
			{ to: '/buttons', label: 'Buttons' },
			{ to: '/inputs', label: 'Inputs' },
			{ to: '/selects', label: 'Selects' },
			{ to: '/lists', label: 'Lists' },
			{ to: '/menus', label: 'Menus' },
			{ to: '/nav', label: 'Navs' },
			{ to: '/flexbox', label: 'Layout' },
			{ to: '/headings', label: 'Headings' },
			{ to: '/notifications', label: 'Notifications' },
			{ to: '/icons', label: 'Icons' },
			{ to: '/cards', label: 'Cards' },
			{ to: '/banners', label: 'Banners' },
			{ to: '/badges', label: 'Badges' },
			{ to: '/loaders', label: 'Loaders' },
			{ to: '/media', label: 'Media' },
			{ to: '/overlays', label: 'Overlays' },
			{ to: '/dividers', label: 'Dividers' },
			{ to: '/text', label: 'Text' },
			{ to: '/avatars', label: 'Avatars' },
			{ to: '/pagination', label: 'Pagination' }
		]
	}

	handleRoute(e, path) {
		this.context.router.transitionTo(path);
	}

	sortBy(items, key) {
		return items.sort((a, b) => a[key] < b[key] ? -1 : 1);
	}

	render() {
		const sortedLinks = this.sortBy(this.props.navItems, 'label');

		return (
			<nav style={navStyle.container}>
				<Container style={navStyle.header} fill={false}>
					<h2 style={navStyle.heading}>
						<IL to="/">
							<Container tagName='span' color='red'>H</Container>
							<Container tagName='span' color='green'>U</Container>
							<Container tagName='span' color='blue'>T</Container>
							<Container tagName='span' color='yellow'>Z</Container>
							<span style={{color: '#FFF', fontWeight: 300, textShadow: '3px 0px #B9B9B9'}}>{`UI`}</span>
						</IL>
					</h2>
					<Text style={navStyle.text}>Stateless, functional components</Text>
				</Container>
				<Menu type={3} px={1} style={navStyle.list}>
					{sortedLinks.map((link, i) =>
						<L to={link.to} key={i}>{link.label}</L>
					)}
				</Menu>
			</nav>
		);
	}
}

const navStyle = {
	container: {
		position: 'fixed',
		width: 'inherit',
		height: '100%',
		backgroundColor: '#F7F7F4',
		overflow: 'scroll'
	},
	header: {
		backgroundColor: '#F7F7F4',
		margin: 0,
		padding: '30px 0px 30px 25px',
		position: 'fixed',
		zIndex: 1
	},
	heading: {
		fontSize: 40
	},
	list: {
		padding: '185px 0 35px'
	},
	text: {
		fontStyle: 'italic',
		color: '#8C8C8C'
	}
};
