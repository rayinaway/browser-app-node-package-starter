const Fs = require('fs');
const Path = require('path');

const RELATIVE_BUILD_DIR_PATH = '../build';

clearBuildArtifacts();

function clearBuildArtifacts() {
	const buildDirPath = Path.resolve(__dirname, RELATIVE_BUILD_DIR_PATH);

	Fs.rmSync(buildDirPath, {
		force: true,
		recursive: true
	});
}
