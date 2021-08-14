import React from "react";
import { useSelector, useDispatch } from "react-redux";
import increment from "../Redux/Actions/increment";
const Container = () => {
  const data = useSelector((state) => state.increment);
  const dispatch = useDispatch();
  debugger;
  return (
    <>
      <button onClick={() => dispatch(increment())}>
        {" "}
        Increment {data.count}
      </button>
    </>
  );
};

export default Container;
