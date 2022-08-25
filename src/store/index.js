import { createStore } from "redux";

const initialState = { counter: 0, show: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
      };
    case "SET":
      return {
        ...state,
        counter: action.value,
      };
    case "INCREMENT_BY_VALUE":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "TOGGLE_COUNTER":
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
