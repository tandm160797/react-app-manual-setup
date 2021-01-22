import { createSlice } from '@reduxjs/toolkit';

const number = createSlice({
  name: 'number',
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      state += action.payload;
      return state;
    },
    decrease: (state, action) => {
      state -= action.payload;
      return state;
    }
  }
});

const { reducer, actions } = number;
export const { increase, decrease } = actions;
export default reducer;
