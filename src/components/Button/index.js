import React, { PropTypes } from 'react';
import { buttonStyles } from '../../styles';

function Button({
	bt,
	color,
	disabled,
	groupStyle,
	href,
	size,
	...props
}) {
	const Component = Boolean(href) ? 'a' : 'button';
	const { initialStyle,
		disabledStyle,
		fillStyle,
		raisedStyle,
		outlineStyle,
		linkStyle } = buttonStyles(color);

	let styles = [ initialStyle ];

	if (disabled) { styles.push(disabledStyle); }
	if (size) { styles.push(fillStyle); }
	if (groupStyle) { styles.push(groupStyle); }
	if (bt === 'raised') { styles.push(raisedStyle); }
	if (bt === 'outline') { styles.push(outlineStyle); }
	if (bt === 'link') { styles.push(linkStyle); }
	if (props.style) { styles.push(props.style); }
	
	const style = Object.assign(...styles);

	return (
		<Component
			{ ...props }
			href={href}
			style={style}
		/>
	);

}

export default Button;

Button.displayName = 'Button';

Button.propTypes = {
	bt: PropTypes.string,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	groupStyle: PropTypes.object,
	size: PropTypes.string
};
