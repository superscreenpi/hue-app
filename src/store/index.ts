import { initialState as exampleState } from './example/state';
import { combineReducers } from 'redux';
import { exampleReducer } from './example/reducers';
import { useSelector } from 'react-redux';

export const initialState = {
  example: exampleState,
};

export type GlobalState = typeof initialState;

export const rootReducer = combineReducers({
  example: exampleReducer,
});

export function useGlobal<T>(selector: (state: GlobalState) => T): T {
  return useSelector<GlobalState, T>(selector);
}
