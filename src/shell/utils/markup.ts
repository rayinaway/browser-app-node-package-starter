export function cnx(...args: Array<unknown>): string | undefined {
	const nonemptyStringArgs = args.filter(
		(arg) => typeof arg === 'string' && arg.length > 0
	);

	return nonemptyStringArgs.length > 0
		? nonemptyStringArgs.join(' ')
		: undefined;
}
