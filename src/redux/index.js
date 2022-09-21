import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';

import rootReducer from './modules';

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    });
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(persistedReducer, {}, bindMiddleware([sagaMiddleware]));

    let persistor = persistStore(store);

    return { persistor, ...store };
  }
};

const wrapper = createWrapper();
export const store = makeStore();

export default wrapper;
