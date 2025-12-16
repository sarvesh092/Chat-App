import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

const initialState = {
  isAuthentecated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fulfiled", state, action);
    });
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pending", state, action);
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected", state, action);
    });
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
