import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { ExtendedPersistConfig } from 'types/state.types';

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
