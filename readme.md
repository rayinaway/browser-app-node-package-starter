# @rayinaway / browser-app-node-package-starter

A highly opinionated starter project for developing browser app Node.js packages. Based on [@rayinaway/node-package-starter](https://github.com/rayinaway/node-package-starter), which features:

- [TypeScript](https://www.typescriptlang.org) as the development language
  - [TS Reset](https://www.totaltypescript.com/ts-reset) for better builtin typing
- [Biome](https://biomejs.dev) linter and formatter
- [Jest](https://jestjs.io) testing framework
- [Parcel](https://parceljs.org) builder
- [EditorConfig](https://editorconfig.org) for easier code editor configuration
- [commitlint](https://commitlint.js.org) for commit message consistency
- [husky](https://typicode.github.io/husky) for enforcing project quality on the Git level

On top of that, this project includes:

- ready-to-use, batteries-included [React](https://reactjs.org) installation
  - basic prerendering
  - UI testing utilities from [Testing Library](https://testing-library.com)
- [vanilla-extract](https://vanilla-extract.style) for preprocessing styles
- reasonable [Browserslist](https://browsersl.ist) configuration

Made by [Ray](https://rayinaway.github.io).

Licensed under the [MIT License](./license.md).

Update details can be found in the [changelog](./changelog.md). The repository is hosted [on GitHub](https://github.com/rayinaway/browser-app-node-package-starter).

## Usage

1. Copy the project files (except the _`.git`_ directory) to your future project's directory.

2. Replace `__PLACEHOLDER__` values in _`package.json`_ and _`package-lock.json`_ with your own meaningful ones.

3. Clone _`.env.development.local.example`_ as _`.env.development.local`_ and edit the values in the file if necessary.

4. Optionally, run the following command to update package dependencies:

   ```shell
   npx npm-check-updates --upgrade && npm install
   ```

   **Beware of major version bumps!** It is strongly recommended to review those updates to ensure that breaking changes will not actually break anything in the project.

5. Don't forget to either replace or remove _`readme.md`_, _`license.md`_, and _`changelog.md`_ to prevent anyone from confusing your project with this starter.

_Since there's no hidden configuration or high-level encapsulating tools, you're free (and encouraged!) to tailor the project further however you see fit._

## Project structure

- Package source files belong in the _`src`_ directory.
  - For convenience, Parcel includes the _`~`_ path alias that points to the directory where _`package.json`_ is located. For example, to import _`src/module.ts`_ from anywhere in the project you can use the _`~/src/module.ts`_ path. Similarly, _`~~`_ points to _`~/src`_.
  - Generally, any self-contained functionality should be implemented as a service in its own subdirectory and registered in _`src/services.ts`_ to be available through dependency injection. The project includes the Monitor service as an example of this approach.
  - _`src/layout`_ and _`src/shell`_ are exceptions to the service-based structure. The _`src/layout`_ directory contains files needed for the app's UI to work as a whole. The _`src/shell`_ directory contains building blocks for that UI; think of it as a built-in component library. Modules in _`src/layout`_ can import modules from _`src/shell`_, but not vice versa.
  - Test files should have the _`.test.js`_ extension to get detected by Jest.
- Configuration files belong in the project root. Each tool's configuration should be put in a dedicated file, if possible.
- The _`scripts`_ directory contains Node.js scripts to run, manually or automatically.
- The _`.husky`_ directory contains shell scripts for husky to run whenever a Git hook gets called.
- Git-ignored _`.parcel-cache`_, _`build`_, _`node_modules`_, and _`test-coverage`_ are for the Parcel cache, package build artifacts, package dependencies, and test coverage reports, respectively.

## Package scripts

- `build` typechecks using `typecheck` and, if successful, builds the package.
- `develop` builds the package continuously and serves it on the specified port.
- `lint` lints TypeScript and JavaScript files.
- `postinstall`, `postpublish`, and `prepublishOnly` are utility scripts for husky to install correctly. Not to be altered.
- `test` runs tests and generates the test coverage report.
- `test-watch` runs tests continuously to test changes being made to files.
- `typecheck` performs type checking for TypeScript files in _`src`_.
