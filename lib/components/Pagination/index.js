'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _paginate = require('../../utils/paginate');

var _paginate2 = _interopRequireDefault(_paginate);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    var initialSelected = props.initialSelected,
        forceSelected = props.forceSelected;

    var selected = typeof initialSelected === 'number' && initialSelected >= 1 ? initialSelected : typeof forceSelected === 'number' && forceSelected >= 1 ? forceSelected : 0;
    _this.state = { selected: selected };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.forceSelected !== 'undefined') {
        this.setState({ selected: nextProps.forceSelected });
      }
    }
  }, {
    key: 'handlePrevPage',
    value: function handlePrevPage(event) {
      event.preventDefault();
      if (this.state.selected > 0) {
        this.handlePage(event, this.state.selected - 1);
      }
    }
  }, {
    key: 'handleNextPage',
    value: function handleNextPage(event) {
      event.preventDefault();
      if (this.state.selected < this.props.totalPages) {
        this.handlePage(event, this.state.selected + 1);
      }
    }
  }, {
    key: 'handlePage',
    value: function handlePage(event, selected) {
      event.preventDefault();
      if (this.state.selected === selected) {
        return;
      }
      this.setState({ selected: selected });
      this.props.onPage(event, selected);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          initialSelected = _props.initialSelected,
          forceSelected = _props.forceSelected,
          hrefPrefix = _props.hrefPrefix,
          totalPages = _props.totalPages,
          previousLabel = _props.previousLabel,
          nextLabel = _props.nextLabel,
          breakLabel = _props.breakLabel,
          totalMarginPagesDisplayed = _props.totalMarginPagesDisplayed,
          totalPagesDisplayed = _props.totalPagesDisplayed,
          onPage = _props.onPage,
          restProps = _objectWithoutProperties(_props, ['initialSelected', 'forceSelected', 'hrefPrefix', 'totalPages', 'previousLabel', 'nextLabel', 'breakLabel', 'totalMarginPagesDisplayed', 'totalPagesDisplayed', 'onPage']);

      var pageProps = {
        initialSelected: initialSelected,
        forceSelected: forceSelected,
        hrefPrefix: hrefPrefix,
        totalPages: totalPages,
        previousLabel: previousLabel,
        nextLabel: nextLabel,
        breakLabel: breakLabel,
        totalMarginPagesDisplayed: totalMarginPagesDisplayed,
        totalPagesDisplayed: totalPagesDisplayed,
        onPage: function onPage(e, s) {
          return _this2.handlePage(e, s);
        }
      };

      var selected = this.state.selected;

      var styles = Object.assign({}, style.container, this.props.style);

      var Item = (0, _Item2.default)(pageProps);
      var pages = (0, _paginate2.default)(_extends({}, pageProps, { selected: selected })).reduce(function (prev, curr, i) {
        prev['key' + i] = Item(curr);
        return prev;
      }, {});

      return _react2.default.createElement(
        _Container2.default,
        _extends({
          style: styles
        }, restProps, {
          className: this.props.className || 'hutz-pagination'
        }),
        _react2.default.createElement(
          'ul',
          { style: style.list },
          _react2.default.createElement(
            'li',
            { style: style.previous },
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick(e) {
                  return _this2.handlePrevPage(e);
                }, style: style.button },
              previousLabel
            )
          ),
          (0, _reactAddonsCreateFragment2.default)(pages),
          _react2.default.createElement(
            'li',
            { style: style.next },
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick(e) {
                  return _this2.handleNextPage(e);
                }, style: style.button },
              nextLabel
            )
          )
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  breakLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
  forceSelected: _react.PropTypes.number,
  hrefPrefix: _react.PropTypes.string,
  initialSelected: _react.PropTypes.number,
  nextLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
  previousLabel: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
  totalMarginPagesDisplayed: _react.PropTypes.number.isRequired,
  totalPages: _react.PropTypes.number.isRequired,
  totalPagesDisplayed: _react.PropTypes.number.isRequired
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
  onPage: function onPage() {}
};

exports.default = Pagination;


var style = {
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