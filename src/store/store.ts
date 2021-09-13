import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { appReducer } from "./app/reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  app: appReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
