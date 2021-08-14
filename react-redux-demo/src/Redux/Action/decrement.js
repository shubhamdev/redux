import { DECREMENT } from "../Constant";
const decrementCount = () => {
  return {
    type: DECREMENT,
    payload: 1,
  };
};
export default decrementCount;
