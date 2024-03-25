import {cnx} from './markup';

describe('cnx shell util', () => {
	test('ignores non-string and empty string arguments', () => {
		const className = cnx(
			undefined,
			'string1',
			null,
			'string2',
			true,
			'string3',
			1,
			'',
			[],
			{}
		);

		expect(className).toBe('string1 string2 string3');
	});

	test('returns the space-separated concatenation of the passed strings', () => {
		const className = cnx('string1', 'string2', 'string3');

		expect(className).toBe('string1 string2 string3');
	});

	test('returns undefined if no non-empty strings were passed', () => {
		const className = cnx();

		expect(className).toBe(undefined);
	});
});
