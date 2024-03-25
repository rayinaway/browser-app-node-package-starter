import {cnx} from './markup';

describe('cnx shell util', () => {
	test('returns the space-separated concatenation of non-empty string arguments', () => {
		const className = cnx(undefined, 'a', null, 'b', true, 'c', 1, '', [], {});

		expect(className).toBe('a b c');
	});

	test('returns undefined if no non-empty strings were passed', () => {
		const className = cnx();

		expect(className).toBe(undefined);
	});
});
