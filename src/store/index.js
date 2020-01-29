import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { routerMiddleware } from "react-router-redux";
import { nprogressMiddleware } from "redux-nprogress";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "../reducer";

export const history = createBrowserHistory();

const config = {
  key: "root",
  storage,
  blacklist: ["routing", "nprogress", "util", "modal"]
};

const reducer = persistReducer(config, rootReducer);
const initialState = {};
const middleware = [thunk, nprogressMiddleware(), routerMiddleware(history)];
const enhancers = [];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducer, initialState, composedEnhancers);
export const persistor = persistStore(store);
export default store;
