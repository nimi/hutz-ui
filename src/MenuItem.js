import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography } from './styles';

function MenuItem({
	icon,
	inline,
	...props
}) {

	const listItemStyle = inline ?
		{ ...style.listItem, ...style.listItemInline } : style.listItem;

	return (
		<div style={{background: 'red'}}>
			{props.children}
		</div>
	);
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

export default radium(MenuItem);

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
