import React, {PropTypes} from 'react';
import Button from '../Button';

function Page({linkHref, page}) {
	return (
		<li style={style.item}>
			<Button href={linkHref} style={style.button}>
				{page}
			</Button>
		</li>
	);
}

Page.displayName = 'Page';

Page.propTypes = {
	linkHref: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
	selected: PropTypes.bool.isRequired
};

export default Page;

const style = {
	item: {
		padding: '0 5px',
	},
	button: {
		fontSize: '0.85em',
		padding: '0.5em 0.9em',
		flex: '1 1 auto'
	}
};
