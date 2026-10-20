import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeMovieName: function (state, action) {
      console.log("changeMovieName func called");
      state.movieName = action.payload;
    },
  },
});

export const { changeMovieName } = searchSlice.actions;
export default searchSlice.reducer;
