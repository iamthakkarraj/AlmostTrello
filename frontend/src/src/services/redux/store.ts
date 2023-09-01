import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { LOCAL_STORAGE_KEY_TODO_LIST } from "../../common/constants";
import { rootReducer } from "./reducers";

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY_TODO_LIST, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem(LOCAL_STORAGE_KEY_TODO_LIST);
    if (serialisedState === null) return [];
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return {};
  }
}

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middlewares)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export { saveToLocalStorage, loadFromLocalStorage, store };
