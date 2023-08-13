import { combineProviders } from './combineProviders';

// Providers List
import { UserContextProvider } from './UserContext/UserContext';

const providers = [UserContextProvider];

export const AppContextProvider = combineProviders(...providers);