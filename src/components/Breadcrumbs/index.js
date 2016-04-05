import React, { PropTypes } from 'react';
import Container from '../Container';
import { colors } from '../../styles';

function Breadcrumbs({ links = mockLinks, Component, ...props }) {
	const LinkComponent = Component || 'a';
	const items = links.map(({item}, i) => (
		<div style={style.item} key={i}>
			<LinkComponent
				href={item.href}
				to={item.href}
			>
				{item.name}
			</LinkComponent>
			{i < links.length - 1 && <span style={style.divider}>/</span>}
		</div>
	));

	return (
		<Container {...props}>
			{items}
		</Container>
	);
}

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.propTypes = {
	links: PropTypes.array.isRequired
};

export default Breadcrumbs;

const style = {
	item: {
		display: 'inline-flex',
	},
	divider: {
		padding: '0 10px'
	}
};
