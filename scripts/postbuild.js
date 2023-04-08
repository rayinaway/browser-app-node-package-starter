const Fs = require('fs');
const Module = require('module');
const Path = require('path');

const server = requireWithoutStyleModules('../build/server/server.js');

const RELATIVE_APP_DOCUMENT_FILE_PATH = '../build/index.html';
const RELATIVE_SERVER_BUILD_DIR_PATH = '../build/server';

prerenderApp();

function prerenderApp() {
	const appDocumentFilePath = Path.resolve(
		__dirname,
		RELATIVE_APP_DOCUMENT_FILE_PATH
	);

	const serverBuildDirPath = Path.resolve(
		__dirname,
		RELATIVE_SERVER_BUILD_DIR_PATH
	);

	let stringifiedAppDocument = Fs.readFileSync(appDocumentFilePath);

	const appElementApproximatePosition =
		stringifiedAppDocument.indexOf('id="app"');
	const appElementContentMountPosition = stringifiedAppDocument.indexOf(
		'</',
		appElementApproximatePosition
	);

	const stringifiedAppRender = server.renderStringifiedApp();

	stringifiedAppDocument =
		stringifiedAppDocument.slice(0, appElementContentMountPosition) +
		stringifiedAppRender +
		stringifiedAppDocument.slice(appElementContentMountPosition);

	Fs.writeFileSync(appDocumentFilePath, stringifiedAppDocument);

	Fs.rmSync(serverBuildDirPath, {
		force: true,
		recursive: true
	});
}

function requireWithoutStyleModules(moduleName) {
	const requireOriginal = Module.prototype.require;

	Module.prototype.require = function (moduleName) {
		if (!moduleName.endsWith('.css')) {
			return requireOriginal.call(this, moduleName);
		}
	};

	const importedModule = require(moduleName);

	Module.prototype.require = requireOriginal;

	return importedModule;
}
