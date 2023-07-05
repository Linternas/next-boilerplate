import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HYDRATE: () => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(state, action)
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    }
  }
});

export const { increment, incrementByAmount, decrement, decrementByAmount, reset } = counter.actions;
export default counter.reducer;
    