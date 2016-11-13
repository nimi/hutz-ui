import React, { PropTypes } from 'react';
import { scale } from '../../styles';

function ListItem({
	px,
	py,
	fill,
	inline,
	style = {},
	...props
}) {
	const listItemStyle = listStyle(fill, inline);
	const styles = {
		...listItemStyle,
		paddingTop: py ? scale[py] : null,
		paddingBottom: py ? scale[py] : null,
		paddingLeft: px ? scale[px] : null,
		paddingRight: px ? scale[px] : null,
		...style
	};

	return <li style={styles} {...props} />;
}

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
	fill: PropTypes.bool,
	icon: PropTypes.bool,
	inline: PropTypes.bool
};

ListItem.defaultProps = {
	fill: true
};

export default ListItem;

const listStyle = (fill, inline) => ({
	display: inline ? 'inline-block' : 'block',
	minWidth: 0,
	minHeight: 0,
	verticalAlign: 'middle',
	flex: fill ? '1 1 auto' : null
});
