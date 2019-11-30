# Redux Experiment

Just playing with Redux...using React with purely Functional Components.

Find below my jottings on [Snippets Lab](https://www.renfei.org/snippets-lab/)

## 1. How redux works

Create a store from redux

```javascript
import { createStore } from "redux";

// Create a reducer and pass it into the store. The reducer is what manipulates the central state inside the store.
// Note: The store only accepts one reducer, other necessary reducers are combined inside the root reducer.
// Also, the reducer is usually a pure synchronous function. No side effects or anything happens inside it.
// Always initialize state with an initial state in a reducer. initialStates are usually object because they hold more than one state in most cases.

const initialState = { counter: 0 };

const rootReducer = function(state = initialState, action) {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter + 1
    };
  } else if (action.type === "DECREMENT_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter - 1
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter + action.value
    };
  }
  // returning state is the most basic form of reducer
  return state;
};

const store = createStore(rootReducer);

// The reducer manipulates state based on different action types. And actions are dispatched by action types as well.

// ActionTypes

const INCREMENT_COUNTER = { type: "INCREMENT_COUNTER" };
const DECREMENT_COUNTER = { type: "DECREMENT_COUNTER" };
const ADD_COUNTER = { type: "ADD_COUNTER", value: 5 };

// Dispatching Actions

store.dispatch(INCREMENT_COUNTER);
store.dispatch(DECREMENT_COUNTER);
store.dispatch(ADD_COUNTER);

// Subscription
// this usually occurs after every change in the state
store.subscrition(() => {
  console.log("Subscription: ", store.getState());
});
```

## 2. Integrating with React

```javascript
// install redux and react-redux
// react-redux is the package that enables the integation of Redux with React.

// set up the store in the root file (usually inside index.js)
// 1. import createStore to setup up thhe global state 'store'
import { createStore } from "redux";

// 2. import Provider which provisions the React root component with the store states and actions.
import { Provider } from "react-redux";

// 3. create a folder 'store' which contains a 'reducers' folder and 'actions' folder. then setup the reducer(s) and action(s) in the respective folders.

// reducers.js (created inside reducers folder)
const initialState = {
  counter: 0
};

export const rootReducer = function(state = initialState, action) {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter + 1
    };
  } else if (action.type === "DECREMENT_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter - 1
    };
  } else if (action.type === "ADD_FIVE_TO_COUNTER") {
    return {
      ...state, // never mutate a state object directly, copy first
      counter: state.counter + action.value
    };
  }
  // returning state is the most basic form of reducer
  return state;
};

// actions.js (created inside actions folder)
export const INCREMENT_COUNTER = { type: "INCREMENT_COUNTER" };
export const DECREMENT_COUNTER = { type: "DECREMENT_COUNTER" };
export const ADD_FIVE_TO_COUNTER = { type: "ADD_FIVE_TO_COUNTER", value: 5 };

// 4. Now that we have a rootReducer, we can go back to the root file (index.js) to setup the store.
// import the rootReducer from reducers folder
const store = createStore(rootReducer);

// 5. Finally, connect our React with the Provider.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// Now we can do receive states from the store and dispatch actions from our components...
```
