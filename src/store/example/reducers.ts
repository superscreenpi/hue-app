import { ExampleState, initialState } from './state';
import { Action, Types } from './actions';

export const exampleReducer = (state = initialState, action: Action): ExampleState => {
  switch (action.type) {
    case Types.INCREMENT_VALUE:
      return { ...state, valueTwo: state.valueTwo + action.delta };
    default:
      return state;
  }
};
