import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const loginSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    userName: function (state, action) {
      console.log("loginName func called");
      state.userName = action.payload;
    },
  },
});

export const { userName } = loginSlice.actions;
export default loginSlice.reducer;
