export function getTomorrow() {
	const date = new Date();
	date.setDate(date.getDate() + 1);
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
	date.setMilliseconds(0);
	return date;
}
