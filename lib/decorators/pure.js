'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ramda = require('ramda');

var _shallowEqual = require('../utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shouldUpdate = require('../utils/shouldUpdate');

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pure(Component) {
	return (0, _shouldUpdate2.default)(function (props, nextProps) {
		return !(0, _shallowEqual2.default)(props, nextProps);
	}, Component);
}

exports.default = pure;