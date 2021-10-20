import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'store',
  initialState: {
    value: 0,
    text : 'privet'
  },
  reducers: {
    add: (state, data) => {
      state.value += +data.payload;
    },
    minus: (state, data) => {
      state.value -= +data.payload;
    }
  },
});

export const { add,minus, showConsole } = taskReducerSlice.actions;

export const selectValue = state => state.taskReducer.value;
export const selectTest = state => state.taskReducer.text;

export default taskReducerSlice.reducer;
