const Fs = require('fs');
const Module = require('module');
const Path = require('path');

const Server = requireWithoutStyleModules('../build/server/server');

const RELATIVE_APP_DOCUMENT_FILE_PATH = '../build/index.html';
const RELATIVE_SERVER_BUILD_DIR_PATH = '../build/server';

const APP_ELEMENT_ID = 'app';

prerenderApp();

function prerenderApp() {
	const appDocumentFilePath = Path.resolve(
		__dirname,
		RELATIVE_APP_DOCUMENT_FILE_PATH
	);

	let stringifiedAppDocument = Fs.readFileSync(appDocumentFilePath);

	const approximateAppElementPosition = stringifiedAppDocument.indexOf(
		`id="${APP_ELEMENT_ID}"`
	);
	const appContentMountPosition = stringifiedAppDocument.indexOf(
		'</',
		approximateAppElementPosition
	);

	const stringifiedAppRender = Server.renderStringifiedApp();

	stringifiedAppDocument =
		stringifiedAppDocument.slice(0, appContentMountPosition) +
		stringifiedAppRender +
		stringifiedAppDocument.slice(appContentMountPosition);

	Fs.writeFileSync(appDocumentFilePath, stringifiedAppDocument);

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
