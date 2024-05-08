import '@total-typescript/ts-reset';
import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';
import Root from '~~/layout/components/root';
import './base.css';
import services from './services';

const APP_ELEMENT_ID = 'app';

if (typeof window !== 'undefined') {
	renderApp();
}

export function getRootRender(forcedRoute?: string): React.ReactElement {
	return (
		<React.StrictMode>
			<Root services={services} forcedRoute={forcedRoute} />
		</React.StrictMode>
	);
}

function renderApp(): void {
	const appElement = document.querySelector(`#${APP_ELEMENT_ID}`);

	if (appElement == null) {
		throw new Error('The app cannot be rendered: the app element is missing.');
	}

	const rootRender = getRootRender();

	if (appElement.childNodes.length > 0) {
		ReactDomClient.hydrateRoot(appElement, rootRender);
	} else {
		ReactDomClient.createRoot(appElement).render(rootRender);
	}
}
