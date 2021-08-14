const redux = require('redux');
const logger = require('redux-logger')
const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger1 = logger.createLogger();

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Dispatch Action Step 1:

// {
//   type: INCREMENT,
//   payload: 'payload'
// }

// Dispatch Action Step 2:

function incrementCounter() {
  return {
    type: INCREMENT,
    payload: 1
  }
}

function decrementCounter() {
  return {
    type: DECREMENT,
    payload: 1
  }
}

// Reducer Step 1: 
// (previousState, action ) => newState

// Initial state of the application
const initialState = {
  counter: 0
}

const incrementR = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return {
        ...state,
        counter: state.counter + 1
      }
      default:
        return state
  }
}

const decrementR = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT': return {
        ...state,
        counter: state.counter - 1
      }
      default:
        return state
  }
}

const rootReducer = combinedReducer({
  incrementReducer: incrementR,
  decrementReducer: decrementR
})

// First step
const store = createStore(rootReducer, applyMiddleware(logger1));
// Second step
// Get state of the application

// Third step
console.log('get the state', store.getState());

// Fourth step
store.subscribe(() => console.log('subscribe store', store.getState()));


// Fifth step
store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
store.dispatch(decrementCounter())

// Sixth step
// const unsubscribe = store.subscribe(() => console.log('subscribe store', store.getState()));
// unsubscribe();