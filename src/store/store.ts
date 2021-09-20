import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { appReducer } from "./app/reducer";
import thunk from 'redux-thunk';
import { tableReducer } from "./table/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  table: tableReducer,
  user: userReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
