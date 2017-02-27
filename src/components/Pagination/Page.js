import React, {PropTypes} from 'react';
import Button from '../Button';

function Page({page, onPage, selected}) {
	console.log(selected);
	return (
		<li style={style.item} className={`hutz-ui-page-item${selected ? ' active' : ''}`}>
			<Button onClick={(e) => onPage(e, page, selected)} style={style.button}>
				{page}
			</Button>
		</li>
	);
}

Page.displayName = 'Page';

Page.propTypes = {
	page: PropTypes.number.isRequired,
	selected: PropTypes.bool.isRequired,
	onPage: PropTypes.func
};

Page.defaultProps = {
	onPage: () => {}
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
