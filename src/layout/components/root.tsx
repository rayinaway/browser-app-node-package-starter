import * as React from 'react';

import {ServicesProvider} from '~/src/layout/hooks/services';
import {ServiceCollection} from '~/src/services';
import RootBase from '~/src/shell/components/root-base';

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
