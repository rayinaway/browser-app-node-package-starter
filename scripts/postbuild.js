const Fs = require('fs');
const Module = require('module');
const Path = require('path');

const Server = requireWithoutStyleModules('../build/server/server');

const RELATIVE_BUILD_DIR_PATH = '../build';
const RELATIVE_SERVER_BUILD_DIR_PATH = '../build/server';

const APP_DOCUMENT_FILE_NAME = 'index.html';

const APP_ELEMENT_ID = 'app';

const STATIC_APP_ROUTES = ['/'];

prerenderApp();

function prerenderApp() {
	const appDocumentFilePath = Path.resolve(
		__dirname,
		RELATIVE_BUILD_DIR_PATH,
		APP_DOCUMENT_FILE_NAME
	);
	const stringifiedAppDocument = Fs.readFileSync(appDocumentFilePath);

	const approximateAppElementPosition = stringifiedAppDocument.indexOf(
		`id="${APP_ELEMENT_ID}"`
	);
	const appContentMountPosition = stringifiedAppDocument.indexOf(
		'</',
		approximateAppElementPosition
	);

	STATIC_APP_ROUTES.forEach((route) => {
		const routeDestinationPosition = route.lastIndexOf('/');

		const routeTrail =
			routeDestinationPosition > 1
				? route.slice(1, routeDestinationPosition)
				: '';

		if (routeTrail.length > 0) {
			const routedAppDocumentDirPath = Path.resolve(
				__dirname,
				RELATIVE_BUILD_DIR_PATH,
				routeTrail
			);

			Fs.mkdirSync(routedAppDocumentDirPath, {
				recursive: true
			});
		}

		const routedAppDocumentFileName =
			routeDestinationPosition !== route.length - 1
				? `${route.slice(routeDestinationPosition + 1)}.html`
				: 'index.html';
		const routedAppDocumentFilePath = Path.resolve(
			__dirname,
			RELATIVE_BUILD_DIR_PATH,
			routeTrail,
			routedAppDocumentFileName
		);

		const stringifiedAppRender = Server.renderStringifiedApp(route);
		const stringifiedRenderedAppDocument =
			stringifiedAppDocument.slice(0, appContentMountPosition) +
			stringifiedAppRender +
			stringifiedAppDocument.slice(appContentMountPosition);

		Fs.writeFileSync(routedAppDocumentFilePath, stringifiedRenderedAppDocument);
	});

	const serverBuildDirPath = Path.resolve(
		__dirname,
		RELATIVE_SERVER_BUILD_DIR_PATH
	);

	Fs.rmSync(serverBuildDirPath, {
		force: true,
		recursive: true
	});
}

function requireWithoutStyleModules(moduleNameOrPath) {
	const requireOriginal = Module.prototype.require;

	Module.prototype.require = requireOverriden;

	const module = require(moduleNameOrPath);

	Module.prototype.require = requireOriginal;

	return module;

	function requireOverriden(moduleNameOrPath) {
		if (!moduleNameOrPath.endsWith('.css')) {
			return requireOriginal.call(this, moduleNameOrPath);
		}
	}
}
