export function cnx(...classes: Array<string | undefined>): string | undefined {
	const nonEmptyClasses = classes.filter((cl) => cl != null && cl.length > 0);

	return nonEmptyClasses.length > 0 ? nonEmptyClasses.join(' ') : undefined;
}
