import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import reducer from "./reducer";



function saveToLocalStorage(state){
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)

  }
}

function loadFromLocalStorage(){
  try{
    const serializedState=localStorage.getItem('state')
    if (serializedState===null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined

  }
}

const persistedState=loadFromLocalStorage();
export const store = createStore(
    reducer,
    persistedState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);


store.subscribe(()=>saveToLocalStorage(store.getState()))

