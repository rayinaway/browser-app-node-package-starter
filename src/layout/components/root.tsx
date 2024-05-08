import * as React from 'react';
import {ServicesProvider} from '~~/layout/hooks/services';
import type {ServiceCollection} from '~~/services';
import RootBase from '~~/shell/components/root-base';
import * as cn from './root.css';

interface PropCollection {
	services: ServiceCollection;
	forcedRoute?: string;
}

export default React.memo(Root);

function Root({services}: PropCollection): React.ReactElement {
	return (
		<ServicesProvider value={services}>
			<RootBase className={cn.root} />
		</ServicesProvider>
	);
}
