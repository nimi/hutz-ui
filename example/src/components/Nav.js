import React from 'react';
import radium from 'radium';
import Logo from './Logo';
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
			{ to: '/icons', label: 'Icons' },
			{ to: '/cards', label: 'Cards' },
			{ to: '/banners', label: 'Banners' },
			{ to: '/badges', label: 'Badges' },
			{ to: '/loaders', label: 'Loaders' },
			{ to: '/media', label: 'Media' },
			{ to: '/dividers', label: 'Dividers' },
			{ to: '/text', label: 'Text' },
			{ to: '/avatars', label: 'Avatars' },
			{ to: '/pagination', label: 'Pagination' },
			{ to: '/dropdowns', label: 'Dropdowns' },
			{ to: '/steptrackers', label: 'StepTrackers' },
			{ to: '/tooltips', label: 'Tooltips' },
			{ to: '/switches', label: 'Switches' },
			{ to: '/breadcrumbs', label: 'Breadcrumbs' },
			{ to: '/toolbars', label: 'Toolbars' },
			{ to: '/tables', label: 'Tables' },
			{ to: '/dialogs', label: 'Dialogs' },
			{ to: '/alerts', label: 'Alerts' },
			{ to: '/blocks', label: 'Blocks' },
			{ to: '/tabpanels', label: 'TabPanels' }
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
			<Container tagName='nav' style={navStyle.container}>
				<Container style={navStyle.header} fill={false}>
					<Logo />
					<Text style={navStyle.text}>Stateless, functional component for React</Text>
				</Container>

				<Menu type={3} px={1} style={navStyle.list}>
					{sortedLinks.map((link, i) =>
						<L to={link.to} key={i}>{link.label}</L>
					)}
				</Menu>
			</Container>
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
		margin: 0,
		padding: '48px 0px 0px 25px',
		position: 'absolute',
		zIndex: 1
	},
	heading: {
		fontSize: 40
	},
	list: {
		padding: '175px 0 35px',
	},
	text: {
		fontStyle: 'italic',
		color: '#8C8C8C',
		fontSize: 16,
		marginTop: 10,
		paddingRight: 50
	}
};
