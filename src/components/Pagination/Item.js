import React, {PropTypes} from 'react';
import Page from './Page';
import Break from './Break';

function ItemFactory({hrefPrefix, breakLabel}) {
	return function Item({type, selected, page}) {
		return type === 'page' ?
			<Page
				selected={selected}
				page={page}
				linkHref={hrefPrefix + page}
			/> :
			<Break breakLabel={breakLabel} />;
	};
}

export default ItemFactory;
