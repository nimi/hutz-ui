import {curry} from 'ramda';
import shallowEqual from '../utils/shallowEqual';
import shouldUpdate from '../utils/shouldUpdate';

function pure(Component) {
	return shouldUpdate(
		(props, nextProps) => !shallowEqual(props, nextProps),
		Component
	);
}

export default pure;
