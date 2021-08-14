import { INCREMENT } from "../Constants";
// import

const initialState = {
  count: 0,
};
const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
export default incrementReducer;
