import { combineReducers } from 'redux';
import { actions as bridgesActions, reducer as bridgesReducer } from './bridges';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const reducer = combineReducers({
  bridges: bridgesReducer,
});

// TODO: Persist?
export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): ReturnType<typeof useDispatch> => useDispatch<AppDispatch>();

export type State = ReturnType<typeof reducer>;

export function useAppState<T>(selector: (state: State) => T): T {
  return useSelector<State, T>(selector);
}

export const actions = { ...bridgesActions };
