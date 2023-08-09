export function cnx(...classes: Array<unknown>): string | undefined {
	let className = '';
	classes.forEach((cl) => {
		if (typeof cl === 'string') {
			className = className.length > 0 ? `${className} ${cl}` : cl;
		}
	});

	return className.length > 0 ? className : undefined;
}
