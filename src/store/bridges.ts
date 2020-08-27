import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bridge {
  id: string;
  internalipaddress: string;
}

const initialState = {
  bridges: [] as Bridge[],
};

export const { actions, reducer } = createSlice({
  name: 'bridges',
  initialState,
  reducers: {
    registerBridge: function (state: typeof initialState, action: PayloadAction<Bridge>): void {
      state.bridges.push(action.payload);
    },
  },
});
