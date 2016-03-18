export default function radii ({round, circle}, r = 2) {
	let borderRadius = round ? r : null;

	if (circle) { borderRadius = 99999; }

	return Boolean(borderRadius) ? { borderRadius } : {};
}

export default radii;
