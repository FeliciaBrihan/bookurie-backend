export function getSubscriptionExpirationDate() {
	const date = new Date();
	date.setDate(date.getDate() + 30);
	return date;
}
