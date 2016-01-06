import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, buttonStyles } from './styles';

function MenuItem({
	icon,
	inline,
	name,
	active,
	...props
}) {

	const menuItemStyle = active ?
		{ ...style.menuItem, ...style.activeMenuItem } : style.menuItem;

	const onClick = (e) => {
		e.preventDefault();
		props.onClick(e);
	};

	const newProps = {
		...props,
		onClick: props.onClick ? onClick : null
	};

	return (

		<a
			style={menuItemStyle}
			href='#'
			{...newProps}
		>
			{name}
		</a>
	);
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

export default radium(MenuItem);

var style = {
	menuItem: {
		...buttonStyles('white').initialStyle,
		borderRadius: 'none',
		height: 'inherit',
		boxSizing: 'border-box',
		display: 'block'
	},
	activeMenuItem: {
		...buttonStyles('white').initialStyle[':active']
	}
};
