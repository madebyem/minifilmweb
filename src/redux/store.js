import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

function saveToLocalStorage(state) {
  try {
    const newState = JSON.stringify(state)
    localStorage.setItem('state', newState)
  } catch (e) {
    console.log(e)

  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    const state = JSON.parse(serializedState);
    if (serializedState === null) return undefined
    return state;
  } catch (e) {
    console.log(e)
    return undefined

  }
}


const persistedState = loadFromLocalStorage();
const store = createStore(
    reducer,
    persistedState,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;


