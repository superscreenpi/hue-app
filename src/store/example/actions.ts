export enum Types {
  INCREMENT_VALUE = 'INCREMENT_VALUE',
}

export interface IncrementAction {
  type: Types.INCREMENT_VALUE;
  delta: number;
}

export type Action = IncrementAction;

export function incrementValue(delta = 1): IncrementAction {
  return {
    type: Types.INCREMENT_VALUE,
    delta,
  };
}
