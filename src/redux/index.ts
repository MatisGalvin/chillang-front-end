import { AnyAction, applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export const useAppDispatch = () => useDispatch<AppDispatch>();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export { store };
