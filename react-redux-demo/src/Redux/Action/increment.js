import { INCREMENT } from "../Constant";
const incrementCount = () => {
  return {
    type: INCREMENT,
    payload: 1,
  };
};
export default incrementCount;
