import '@total-typescript/ts-reset';
import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';

import Root from '~/src/layout/components/root';

import services from './services';

const APP_ELEMENT_ID = 'app';

export const rootRender = (
	<React.StrictMode>
		<Root services={services} />
	</React.StrictMode>
);

if (typeof window !== 'undefined') {
	renderApp();
}

function renderApp(): void {
	const appElement = document.querySelector(`#${APP_ELEMENT_ID}`);

	if (appElement == null) {
		throw new Error('The app cannot be rendered: the app element is missing.');
	}

	if (appElement.childNodes.length > 0) {
		ReactDomClient.hydrateRoot(appElement, rootRender);
	} else {
		ReactDomClient.createRoot(appElement).render(rootRender);
	}
}
