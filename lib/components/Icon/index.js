'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _icons = require('../../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (function (_React$Component) {
	_inherits(Icon, _React$Component);

	function Icon(props) {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, props));
	}

	_createClass(Icon, [{
		key: 'getIcon',
		value: function getIcon(icon) {
			return _icons2.default.get(icon);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var type = _props.type;
			var color = _props.color;
			var size = _props.size;

			return _react2.default.createElement(
				'svg',
				{
					height: '100%',
					preserveAspectRatio: 'xMidYMid meet',
					viewBox: '0 0 ' + size + ' ' + size,
					stroke: color || 'black',
					fill: color || 'black',
					style: { height: size + 'px', width: size + 'px' },
					width: '100%' },
				_react2.default.createElement(
					'g',
					{ id: type },
					_react2.default.createElement('path', { d: this.getIcon(type) })
				)
			);
		}
	}]);

	return Icon;
})(_react2.default.Component);

Icon.displayName = 'Icon';
Icon.propTypes = {
	color: _react.PropTypes.string,
	size: _react.PropTypes.number,
	type: _react.PropTypes.string
};
Icon.defaultProps = {
	size: 25
};
exports.default = (0, _radium2.default)(Icon);