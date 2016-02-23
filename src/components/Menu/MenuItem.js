import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, buttonStyles } from '../../styles';

function MenuItem({
	icon,
	name,
	active,
	type,
	...props
}) {
	const baseStyle = {
		 ...buttonStyles().initialStyle,
		...style.menuItem
	};
	const typeStyleMap = new Map([
		[1, { ...baseStyle }],
		[2, { ...baseStyle, border: null }],
		[3, { ...baseStyle,
			border: null,
			boxShadow: `inset -2px 0 0 ${colors.gray}`,
			':hover': { textDecoration: 'none' },
			':active': null,
			':focus': {
				boxShadow: `inset -2px 0 0 ${colors.black}`,
				fontWeight: 600
			}
		}]
	]);

	const itemStyle = type ? typeStyleMap.get(type) : typeStyleMap.get(1);

	const menuItemStyle = active ?
		{ ...itemStyle, ...style.activeMenuItem } : itemStyle;

	return (
		<span>
			{React.Children.map(props.children, (c, i) =>{
				 return React.cloneElement(c, {
					 style: { ...menuItemStyle, ...props.style },
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

const style = {
	menuItem: {
		textAlign: null,
		borderRadius: 'none',
		height: 'inherit',
		boxSizing: 'border-box',
		display: 'block'
	},
	activeMenuItem: {
		...buttonStyles().initialStyle[':active']
	}
};
