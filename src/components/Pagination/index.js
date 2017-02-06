import React, { Component, PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import paginate from '../../utils/paginate';
import ItemFactory from './Item';

import Button from '../Button';
import Container from '../Container';
import { colors } from '../../styles';

class Pagination extends Component {

  constructor(props) {
    super(props);
    const { initialSelected, forceSelected } = props;
    const selected = (
      typeof initialSelected === 'number' && initialSelected >= 0
	? initialSelected
	: typeof forceSelected === 'number' && forceSelected >= 0
	? forceSelected
	: 0
    );
    this.state = { selected };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.forcePage !== 'undefined') {
      this.setState({ selected: nextProps.forcePage });
    }
  }

  handlePrevPage(event) {
    event.preventDefault();
    if (this.state.selected > 0) {
      this.handlePage(event, this.state.selected - 1);
    }
  }

  handleNextPage(event) {
    event.preventDefault();
    if (this.state.selected < this.props.pageCount - 1) {
      this.handlePage(event, this.state.selected + 1);
    }
  }

  handlePage(event, selected) {
    event.preventDefault();
    if (this.state.selected === selected) { return; }
    this.setState({selected});
    this.props.onPage(selected);
  }

  render() {

    const pageProps = {
      initialSelected,
      forceSelected,
      hrefPrefix,
      totalPages,
      previousLabel,
      nextLabel,
      breakLabel,
      totalMarginPagesDisplayed,
      totalPagesDisplayed,
      onPage
    } = this.props;

    const styles = Object.assign({}, style.container, this.props.style);

    const Item = ItemFactory(pageProps);
    const pages = paginate({ ...pageProps, onPage: (e, s) => this.handlePage(e, s), selected })
            .reduce((prev, curr, i) => {
	      prev['key' + i] = Item(curr);
	      return prev;
	    }, {});

    const previousLink = selected === 0 ? '#' : hrefPrefix + selected;
    const nextLink = selected === totalPages - 1 ? '#' : hrefPrefix + (selected + 1);

    return (
      <Container
	 style={styles}
	 {...props}
	 className={props.className || 'hutz-pagination'}
	 >
	<ul style={style.list}>
	  <li style={style.previous}>
	    <Button href={previousLink} onClick={(e) => handlePrevPage(e)} style={style.button}>
	      {previousLabel}
	    </Button>
	  </li>
	  {createFragment(pages)}
	  <li style={style.next}>
	    <Button href={nextLink} onClick={(e) => handleNextPage(e)} style={style.button}>
	      {nextLabel}
	    </Button>
	  </li>
	</ul>
      </Container>
    );
  }
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
    margin: '10px 0'
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
