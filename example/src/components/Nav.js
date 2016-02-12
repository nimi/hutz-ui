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
				<h2 style={navStyle.header}>
					<IL to="/">
						HUTZ UI
					</IL>
				</h2>
				<Menu type={3} px={2}>
					{sortedLinks.map((link) =>
						<L to={link.to}>{link.label}</L>
					)}
				</Menu>
			</nav>
		);
	}
}
