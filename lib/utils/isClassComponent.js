'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isClassComponent;
function isClassComponent(Component) {
	return Boolean(Component) && Component.prototype && Component.prototype.isReactComponent === 'object';
}