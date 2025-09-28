import { SignUpContext } from '../../context/sign-up-context';
import { Middleware } from 'redux';
import rootReducer from '../reducer';
import sagas from '../../saga';
import { configureStore } from '@reduxjs/toolkit';
const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware({ context: SignUpContext });
const middlewares: Middleware[] = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, sagaMiddleware };
