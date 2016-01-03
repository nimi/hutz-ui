import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography } from './styles';

function ListItem({
	icon,
	inline,
	...props
}) {

	const listItemStyle = inline ?
		{ ...style.listItem, ...style.listItemInline } : style.listItem;

	return (
		<li
			style={listItemStyle}
			{...props}
		/>
	);
}

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

export default radium(ListItem);

var style = {
	listItem: {
		display: 'block',
		padding: '1em 0',
		verticalAlign: 'middle',
	},
	listItemInline: {
		padding: '0.5em 1em'
	}
};
