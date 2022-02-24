import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { INavigation } from "models";
import { ITranslationFile, IUser } from "typings";

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
    builder.addCase(updateTranslationFileById.fulfilled, (state, action) => {
      const navigation = action.payload.navigation;
      state.projects[navigation.projectIndex!].pages[
        navigation.pageIndex!
      ].translationFiles[navigation.tabIndex!] = action.payload.data;
      return state;
    });
  },
});

export const fetchUser = createAsyncThunk("getUser", async (userId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
  );
  return response.data as IUser;
});

export const updateTranslationFileById = createAsyncThunk(
  "updateTranslationFileById",
  async (payload: {
    translationfile: ITranslationFile;
    navigation: INavigation;
  }) => {
    const response = await axios.post<ITranslationFile>(
      `${process.env.REACT_APP_BACKEND_URL}/translationFiles/update/${payload.translationfile._id}`,
      { data: payload.translationfile.data }
    );
    return { navigation: payload.navigation, data: response.data };
  }
);

const userReducer = userSlice.reducer;
export { userReducer };
