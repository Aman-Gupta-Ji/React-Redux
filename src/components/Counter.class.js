import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };

  render() {
    const { show } = this.state;
    const { counter } = this.props;
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && (
          <>
            <div className={classes.value}>&lt;-- {counter} --&gt;</div>
            <div>
              <button onClick={this.incrementHandler}>Increment</button>
              <button onClick={this.decrementHandler}>Decrement</button>
            </div>
          </>
        )}
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
