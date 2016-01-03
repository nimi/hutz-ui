import React, { PropTypes } from 'react';
import radium from 'radium';
import List from './List';
import MenuItem from './MenuItem';
import { colors, typeography, InputStyles } from './styles';

function Menu({
	col,
	inline,
	...props
}) {
	let styles = {
		...style.list
	};

	styles = inline ? { ...styles, ...style.inline } : style;

	return (
		<List inline>
			{React.Children.map(props.children, menuItem =>
				<MenuItem>{menuItem}</MenuItem>
			)}
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
		display: 'inline-flex'
	}
};
