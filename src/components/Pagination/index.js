import React, { PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import paginate from '../../utils/paginate';
import ItemFactory from './Item';

import Button from '../Button';
import Container from '../Container';
import { colors } from '../../styles';

function Pagination(props) {
	const {
		initialSelected,
		forceSelected,
		hrefPrefix,
		totalPages,
		previousLabel,
		nextLabel
	} = props;

	const styles = Object.assign({},
		style.container,
		props.style
	);

	const selected = (
		initialSelected ? initialSelected :
		forceSelected ? forceSelected :
		6
	);

	const Item = ItemFactory(props);
	const pages = paginate({...props, selected})
		.reduce((prev, curr, i) => {
			prev['key' + i] = Item(curr);
			return prev;
		}, {});

	const previousLink = selected === 0 ? '#' : hrefPrefix + selected;
	const nextLink = selected === totalPages - 1 ? '#' : hrefPrefix + (selected + 2);
	return (
		<Container
			style={styles}
			{...props}
		>
			<ul style={style.list}>
				<li style={style.previous}>
					<Button href={previousLink} style={style.button}>
						{previousLabel}
					</Button>
				</li>
				{createFragment(pages)}
				<li style={style.next}>
					<Button href={nextLink} style={style.button}>
						{nextLabel}
					</Button>
				</li>
			</ul>
		</Container>
	);
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
	breakLabel: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string
	]),
	forceSelected: PropTypes.number,
	hrefPrefix: PropTypes.string,
	initialSelected: PropTypes.number,
	nextLabel: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string
	]),
	previousLabel: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string
	]),
	totalMarginPagesDisplayed: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	totalPagesDisplayed: PropTypes.number.isRequired
};

Pagination.defaultProps = {
	totalPages: 100,
	totalPagesDisplayed: 3,
	totalMarginPagesDisplayed: 2,
	previousLabel: '<',
	nextLabel: '>',
	breakLabel: '...',
	hrefPrefix: '/page/'
};

export default Pagination;

const style = {
	container: {
		maxWidth: 450
	},
	list: {
		display: 'flex',
		listStyleType: 'none',
		padding: 0,
		margin: '10px 0',
	},
	previous: {
		padding: '0 10px 0 0'
	},
	next: {
		padding: '0 0 0 10px'
	},
	button: {
		fontSize: '0.85em',
		padding: '0.5em 0.75em'
	}
};