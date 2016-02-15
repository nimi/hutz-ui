import React, {Component} from 'react';
import {curryN} from 'ramda';
import createElement from './createElement';

function shouldUpdate(validate, BaseComponent) {
	return class extends Component {
		shouldComponentUpdate(nextProps) {
			return validate(this.props, nextProps);
		}

		render() {
			return createElement(BaseComponent, this.props);
		}
	};
}

export default curryN(2, shouldUpdate);
