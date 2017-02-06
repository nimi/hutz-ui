import React, {PropTypes} from 'react';
import Page from './Page';
import Break from './Break';

function ItemFactory({ breakLabel, onPage }) {
	return function Item({type, selected, page}) {
		return type === 'page' ?
			<Page
				selected={selected}
				page={page}
				onPage={onPage}
			/> :
			<Break breakLabel={breakLabel} />;
	};
}

export default ItemFactory;
