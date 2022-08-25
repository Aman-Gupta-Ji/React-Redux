import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>&lt;-- {counter} --&gt;</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
