import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Setting up a slice for current project with an initial state empty
 */

interface ISelectedProject {
  index: number | null;
}

const initialState: ISelectedProject = {
  index: null,
};

export const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setCurrentProjectIndex: (sliceState, action: PayloadAction<number>) => {
      sliceState.index = action.payload;
      return sliceState;
    },
  },
});

export const { setCurrentProjectIndex } = selectedProjectSlice.actions;
const selectedProjectReducer = selectedProjectSlice.reducer;
export { selectedProjectReducer };
