import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import authReducer from './features/authSlice';
import { combineReducers } from 'redux';

const { persistStore, persistReducer } = require('redux-persist');
const storage = require('redux-persist/lib/storage').default;

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counterReducer,
    authReducer
  })
);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: { counterReducer },
//   devTools: process.env.NODE_ENV !== 'production'
// });
