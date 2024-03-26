import * as ReactDomServer from 'react-dom/server';

import {getRootRender} from './main';

export function renderStringifiedApp(route: string): string {
	const rootRender = getRootRender(route);

	return ReactDomServer.renderToString(rootRender);
}
