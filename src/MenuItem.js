import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, buttonStyles } from './styles';

function MenuItem({
	icon,
	name,
	active,
	type,
	...props
}) {
	const baseStyle = {
		 ...buttonStyles('white').initialStyle,
		...style.menuItem
	};
	const typeStyleMap = new Map([
		[1, { ...baseStyle }],
		[2, { ...baseStyle, border: null }],
		[3, { ...baseStyle,
			border: null,
			borderRight: `2px solid ${colors.gray}`,
			':hover': null,
			':active': null,
			':focus': {
				borderRight: `2px solid ${colors.black}`
			}
		}]
	]);

	const itemStyle = type ? typeStyleMap.get(type) : typeStyleMap.get(1);

	const menuItemStyle = active ?
		{ ...itemStyle, ...style.activeMenuItem } : itemStyle;

	return (
		<span>
			{React.Children.map(props.children, (c) =>{
				 return React.cloneElement(c, {
					style: menuItemStyle
				 });
			 })}
		</span>
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
		textAlign: null,
		borderRadius: 'none',
		height: 'inherit',
		boxSizing: 'border-box',
		display: 'block'
	},
	activeMenuItem: {
		...buttonStyles('white').initialStyle[':active']
	}
};
