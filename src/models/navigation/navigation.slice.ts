import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Setting up a slice in order to follow the user navigation. It will contain only number that represents
 * the current project index, the current page index and the current tab index (English or french or whatever
 * languages is available)
 */

export interface INavigation {
  projectIndex: number | null;
  pageIndex: number | null;
  tabIndex: number | null;
}

const initialState: INavigation = {
  projectIndex: null,
  pageIndex: null,
  tabIndex: 0,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentProjectIndex: (sliceState, action: PayloadAction<number>) => {
      sliceState.projectIndex = action.payload;
      return sliceState;
    },
    setCurrentPageIndex: (sliceState, action: PayloadAction<number>) => {
      sliceState.pageIndex = action.payload;
      return sliceState;
    },
    setCurrentTabIndex: (sliceState, action: PayloadAction<number>) => {
      sliceState.tabIndex = action.payload;
      return sliceState;
    },
  },
});

export const {
  setCurrentProjectIndex,
  setCurrentPageIndex,
  setCurrentTabIndex,
} = navigationSlice.actions;
const navigationReducer = navigationSlice.reducer;
export { navigationReducer };
