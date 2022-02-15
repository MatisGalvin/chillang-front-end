import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { IUser } from "../../typings/models/user-model.typing";

/**
 * Setting up a slice for User with an initial state empty
 */

const initialState = {} as IUser;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchUser = createAsyncThunk("getUser", async (userId: string) => {
  const response = await axios.get(`${SERVER_URL}/users/${userId}`);
  return response.data as IUser;
});

export default userSlice.reducer;
