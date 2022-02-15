import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../../config";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // LISTE DES ACTIONS
    getUser: (user) => {
      user = {
        _id: "61e80f089810ec398b36e8f2",
        username: "Anais",
        encryptedPassword: "motdepasseupdated",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (user, action) => {
      //Ma racine
      //Ajoute l'action fetchUser en écoute.
      user = action.payload;
    });
  },
});

export const fetchUser = createAsyncThunk("getUser", async (userId) => {
  // 1er action.type, 2eme, payload
  const response = await axios.get(`${SERVER_URL}/users/${userId}`);
  return response.data; //PAYLOAD DE MON ACTION
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
