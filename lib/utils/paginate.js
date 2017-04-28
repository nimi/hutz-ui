'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = paginate;
function getSides(total, selected, totalDisplayed) {
	var left = totalDisplayed / 2;
	var right = totalDisplayed - left;

	if (selected > total - left) {
		left = totalDisplayed - total - selected;
		right = total - selected;
	} else if (selected < left) {
		left = selected;
		right = totalDisplayed - left;
	}

	return { left: left, right: right };
}

function paginate(_ref) {
	var totalPages = _ref.totalPages,
	    selected = _ref.selected,
	    totalPagesDisplayed = _ref.totalPagesDisplayed,
	    totalMarginPagesDisplayed = _ref.totalMarginPagesDisplayed;

	if (totalPages < totalPagesDisplayed) {
		return Array(totalPages).fill().map(function (_, i) {
			return { type: 'page', page: i + 1, selected: selected === i };
		});
	}

	var _getSides = getSides(totalPages, selected, totalPagesDisplayed),
	    left = _getSides.left,
	    right = _getSides.right;

	var lastValue = void 0;

	return Array(totalPages).fill().map(function (_, i, pages) {
		var page = i + 1;

		if (page <= totalMarginPagesDisplayed || page > totalPages - totalMarginPagesDisplayed || i > selected - left && i <= selected + right) {
			lastValue = { type: 'page', page: page, selected: selected === i };
			return lastValue;
		}

		if (lastValue && lastValue.type !== 'break') {
			lastValue = { type: 'break' };
			return lastValue;
		}
	}).filter(function (v) {
		return Boolean(v);
	});
}