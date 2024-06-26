import * as React from 'react';
import type {ServiceCollection} from '~~/services';

type ServicesContextValue = ServiceCollection | null;

const ServicesContext = React.createContext<ServicesContextValue>(null);

export const ServicesProvider = ServicesContext.Provider;

export function useServices(): ServicesContextValue {
	return React.useContext(ServicesContext);
}
