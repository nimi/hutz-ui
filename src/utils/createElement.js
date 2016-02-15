import React from 'react';
import isFunctionComponent from '../utils/isFunctionComponent';

export default function createElement(Component, props, children) {
	if (!props.hasKey && isFunctionComponent(Component)) {
		return children ?
			Component({...props, children}) :
			Component(props);
	}

	return children ?
		<Component {...props}>{children}</Component> :
		<Component {...props} />;
}
