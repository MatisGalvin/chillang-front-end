import {
  AnyAction,
  applyMiddleware,
  createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "models";
import { navigationReducer } from "./navigation/navigation.slice";
/**
 * ROOT REDUCER
 */
const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
});
/**
 * MIDDLEWARES
 */
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

/**
 * STORE INIT
 */
const store = createStore(rootReducer, composedEnhancer);

/**
 * HOOKS
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type IStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<IStore, null, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<IStore> = useSelector;

export { store };
