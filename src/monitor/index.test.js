import Monitor from '.';

describe('Monitor service', () => {
	test('does not output a reported event with an arbitrary payload to the console', () => {
		const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
		const consoleInfoMock = jest.spyOn(console, 'info').mockImplementation();
		const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
		const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();

		const monitor = new Monitor();

		const object = new Object();

		monitor.reportEvent(object);

		expect(consoleErrorMock).not.toHaveBeenCalled();
		expect(consoleInfoMock).not.toHaveBeenCalled();
		expect(consoleLogMock).not.toHaveBeenCalled();
		expect(consoleWarnMock).not.toHaveBeenCalled();
	});

	test('outputs a reported event with an error payload as an error to the console', () => {
		const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

		const monitor = new Monitor();

		const error = new Error();

		monitor.reportEvent(error);

		expect(consoleErrorMock).toHaveBeenCalledOnceWith(payload);
	});
});
