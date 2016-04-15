function getSides(total, selected, totalDisplayed) {
	let left = totalDisplayed / 2;
	let right = totalDisplayed - left;

	if (selected > total - left) {
		left = totalDisplayed - total - selected;
		right = total - selected;
	} else if (selected < left) {
		left = selected;
		right = totalDisplayed - left;
	}

	return {left, right};
}

export default function paginate({
	totalPages,
	selected,
	totalPagesDisplayed,
	totalMarginPagesDisplayed
}) {

	if (totalPages < totalPagesDisplayed) {
		return Array(totalPages).fill().map((_, i) => {
			return {type: 'page', page: i + 1, selected: selected === i};
		});
	}

	const {left, right} = getSides(totalPages, selected, totalPagesDisplayed);
	let lastValue;

	return Array(totalPages).fill().map((_, i, pages) => {
		const page = i + 1;

		if (
			page <= totalMarginPagesDisplayed ||
			page > totalPages - totalMarginPagesDisplayed ||
			((i > selected - left) && (i <= (selected + right)))
		) {
			lastValue = {type: 'page', page, selected: selected === i};
			return lastValue;
		}

		if (lastValue && lastValue.type !== 'break') {
			lastValue = { type: 'break' };
			return lastValue;
		}
	})
	.filter(v => Boolean(v));
}
