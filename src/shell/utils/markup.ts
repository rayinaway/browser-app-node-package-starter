export function cnx(...args: Array<unknown>): string | undefined {
	const nonEmptyStringArgs = args.filter(
		(arg) => typeof arg === 'string' && arg.length > 0
	);

	return nonEmptyStringArgs.length > 0
		? nonEmptyStringArgs.join(' ')
		: undefined;
}
