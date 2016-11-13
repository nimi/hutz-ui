import React, { PropTypes } from 'react';
import { colors, buttonStyles } from '../../styles';

function MenuItem({
	active,
	type,
	backgroundColor,
	color,
	...props
}) {
	const style = styles({backgroundColor, color});
	const baseStyle = {
		...buttonStyles(backgroundColor).initialStyle,
		...style.base
	};
	const typeStyleMap = new Map([
		[1, { ...baseStyle }],
		[2, { ...baseStyle, border: 'none' }],
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

	const menuItemStyle = active ? { ...itemStyle, ...style.active } : itemStyle;

	return (
		<span>
			{React.Children.map(props.children, (c, i) =>{
				 return React.cloneElement(c, {
					 key: i,
					 style: { ...menuItemStyle, ...props.style },
				 });
			 })}
		</span>
	);
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

export default MenuItem;

const styles = ({backgroundColor, color}) => ({
	base: {
		textAlign: null,
		borderRadius: 'none',
		height: 'inherit',
		boxSizing: 'border-box',
		display: 'block',
		backgroundColor: colors(backgroundColor) || 'transparent',
		width: '100%'
	},
	active: {
		...buttonStyles(backgroundColor).initialStyle[':active']
	}
});
