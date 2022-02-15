import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "./User/User.slice";

const rootReducer = combineReducers({ user: userSliceReducer });

export default rootReducer;
