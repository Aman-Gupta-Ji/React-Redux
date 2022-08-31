import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    set: (state, action) => {
      state.counter = action.payload;
    },
    incrementByValue: (state, action) => {
      state.counter += action.payload;
    },
    toggleCounter: (state) => {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { increment, decrement, reset, set, incrementByValue, toggleCounter } = counterSlice.actions;

export default store;
