import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import sharedReducers from 'app/shared/reducers';

const store = configureStore({
  reducer: sharedReducers,
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
      .concat(loadingBarMiddleware())
  ,
});

const getStore = () => store;

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default getStore;