import React, { PropTypes } from 'react';
import radium from 'radium';
import List from './List';
import MenuItem from './MenuItem';
import { colors, typeography, InputStyles } from './styles';

function Menu({
	col,
	inline,
	type,
	activeIndex,
	...props
}) {
	let styles = {
		...style.list
	};

	styles = inline ? { ...styles, ...style.inline } : style;

	return (
		<List
			{...props}
			inline={inline}
			px={0}
			py={0}
		>
			{React.Children.map(props.children, (c, i) => {
				return (
					<MenuItem
						type={type}
						active={i === activeIndex}
					 >
						 {c}
					 </MenuItem>
				);
			})}
		</List>
	);
}

Menu.displayName = 'Menu';

Menu.propTypes = {
	inline: PropTypes.bool
};

export default radium(Menu);

var style = {
	list: {
		color: colors('gray', 5),
		fontSize: typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
	},
	inline: {
		display: 'inline-flex',
	}
};
