import React, { PropTypes, Children, cloneElement } from 'react';
import Button from './Button';

function ButtonGroup({
	children,
	vertical,
	...props
}) {
	const style = {
		width: 'initial'
	};

	const buttonStyle = {
		display: vertical ? 'block' : 'inline-block',
		marginTop: vertical ? 1 : null,
		marginLeft: !vertical ? 1 : null,
		borderRadius: 'none'
	};

	const firstButtonRadius = vertical ? '3px 3px 0 0' : '3px 0 0 3px';
	const lastButtonRadius = vertical ? '0 0 3px 3px' : '0 3px 3px 0';

	return (
		<div
			{ ...props }
			style={ style }
		>
			{Children.map(children, (button, i) => {
				const first = i === 0 ? { borderRadius: firstButtonRadius } : {};
				const last = i === (children.length - 1) ? { borderRadius: lastButtonRadius } : {};
				const groupStyle = { ...first, ...last };
				return cloneElement(button, { groupStyle: { ...buttonStyle, ...groupStyle } });
			})}
		</div>
	);
}

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
	children: function (props, propName, componentName) {
      const { type } = props[propName];

      if (type !== Button || type.displayName !== 'Button') {
        return new Error(
          `"${componentName} should have a child of the following type: 'Button'"`
        );
      }
    },
    vertical: PropTypes.bool
};

export default ButtonGroup;
