import React, { PropTypes } from 'react';
import Container from './Container';
import radium from 'radium';
import { colors, typeography, scale } from './styles';

function ListItem({
	icon,
	inline,
	px,
	py,
	...props
}) {

	const listItemStyle = inline ?
		{ ...style.listItem, ...style.listItemInline } : style.listItem;

	let styles = {
		...listItemStyle,
		paddingTop: py ? scale[py] : null,
		paddingBottom: py ? scale[py] : null,
		paddingLeft: px ? scale[px] : null,
		paddingRight: px ? scale[px] : null
	};

	return (
		<li
			style={styles}
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
		minWidth: 0,
		minHeight: 0,
		verticalAlign: 'middle',
	},
	listItemInline: {
		flex: '1 1 auto'
	}
};
