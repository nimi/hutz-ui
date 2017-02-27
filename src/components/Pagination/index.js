import React, { Component, PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
import paginate from '../../utils/paginate';
import ItemFactory from './Item';

import Button from '../Button';
import Container from '../Container';

class Pagination extends Component {

  constructor(props) {
    super(props);
    const { initialSelected, forceSelected } = props;
    const selected = (
      typeof initialSelected === 'number' && initialSelected >= 1
	? initialSelected
	: typeof forceSelected === 'number' && forceSelected >= 1
	? forceSelected
	: 0
    );
    this.state = { selected };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.forceSelected !== 'undefined') {
      this.setState({ selected: nextProps.forceSelected });
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
    if (this.state.selected < this.props.totalPages) {
      this.handlePage(event, this.state.selected + 1);
    }
  }

  handlePage(event, selected) {
    event.preventDefault();
    if (this.state.selected === selected) { return; }
    this.setState({ selected });
    this.props.onPage(event, selected);
  }

  render() {
    const {
      initialSelected,
      forceSelected,
      hrefPrefix,
      totalPages,
      previousLabel,
      nextLabel,
      breakLabel,
      totalMarginPagesDisplayed,
      totalPagesDisplayed,
      onPage,
      ...restProps
    } = this.props;

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
      onPage: (e, s) => this.handlePage(e, s)
    };

    const { selected } = this.state;
    const styles = Object.assign({}, style.container, this.props.style);

    const Item = ItemFactory(pageProps);
    const pages = paginate({ ...pageProps, selected })
            .reduce((prev, curr, i) => {
	      prev['key' + i] = Item(curr);
	      return prev;
	    }, {});

    return (
      <Container
	 style={styles}
	 {...restProps}
	 className={this.props.className || 'hutz-pagination'}
	 >
	<ul style={style.list}>
	  <li style={style.previous}>
	    <Button onClick={(e) => this.handlePrevPage(e)} style={style.button}>
	      {previousLabel}
	    </Button>
	  </li>
	  {createFragment(pages)}
	  <li style={style.next}>
	    <Button onClick={(e) => this.handleNextPage(e)} style={style.button}>
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
  totalPagesDisplayed: 6,
  totalMarginPagesDisplayed: 1,
  initialSelected: 0,
  previousLabel: '<',
  nextLabel: '>',
  breakLabel: '...',
  hrefPrefix: '/page/',
  onPage: () => {}
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
