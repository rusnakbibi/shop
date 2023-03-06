import { PersistConfig } from 'redux-persist';

import { rootReducer } from 'store/root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

export type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist?: (keyof RootState)[];
}
