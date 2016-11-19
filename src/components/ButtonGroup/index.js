import React, { PropTypes, Children, cloneElement } from 'react';
import Button from '../Button';
import Container from '../Container';

function ButtonGroup({
	children,
	vertical,
	...props
}) {
	const buttonGroupStyle = bgStyle(vertical);
	const buttonStyle = bStyle(vertical);
	const firstButtonRadius = vertical ? '3px 3px 0 0' : '3px 0 0 3px';
	const lastButtonRadius = vertical ? '0 0 3px 3px' : '0 3px 3px 0';

	return (
		<Container
			{ ...props }
			className={props.className || 'hutz-buttongroup'}
			style={ buttonGroupStyle }
		>
			{Children.map(children, (button, i) => {
				const first = i === 0 ? { borderRadius: firstButtonRadius } : {};
				const last = i === (children.length - 1) ? { borderRadius: lastButtonRadius } : {};
				const groupStyle = { ...first, ...last };
				return cloneElement(button, { groupStyle: { ...buttonStyle, ...groupStyle } });
			})}
		</Container>
	);
}

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
	children: PropTypes.node,
	vertical: PropTypes.bool
};

export default ButtonGroup;

const bgStyle = vertical => ({
	width: 'initial',
	maxWidth: vertical ? '16em' : null
});

const bStyle = vertical => ({
	display: vertical ? 'block' : 'inline-block',
	marginTop: vertical ? 1 : null,
	marginLeft: !vertical ? 1 : null,
	borderRadius: 'none',
	width: vertical ? '100%' : null
});
