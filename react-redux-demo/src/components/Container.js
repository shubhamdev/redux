import React from "react";
import { connect } from "react-redux";
import decrementCount from "../Redux/Action/decrement";
import incrementCount from "../Redux/Action/increment";
const Container = (props) => {
  debugger;
  return (
    <>
      <div>
        <button onClick={() => props.increment1()}>
          Increment {props.increment}
        </button>
        <button onClick={() => props.decrement1()}>
          Decrement {props.decrement}
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    decrement: store.decrement.count,
    increment: store.increment.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement1: () => dispatch(decrementCount()),
    increment1: () => dispatch(incrementCount()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
