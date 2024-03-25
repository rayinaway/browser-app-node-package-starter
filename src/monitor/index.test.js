import Monitor from '.';

describe('Monitor service', () => {
	test('outputs the error to the console on error event record', () => {
		const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

		const monitor = new Monitor();

		const error = new Error();

		monitor.recordEvent('error', error);

		expect(consoleErrorMock).toHaveBeenCalledOnceWith(error);
	});
});
