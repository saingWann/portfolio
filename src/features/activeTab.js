import { createSlice } from "@reduxjs/toolkit";

const activeTabSlice = createSlice({
  name: "active",
  initialState: "about",
  reducers: {
    setActiveTab: (state, action) => {
     return state = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
