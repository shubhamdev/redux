import { DECREMENT } from "../Constant";

const initialState = {
  count: 1,
};
const decrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default decrementReducer;
