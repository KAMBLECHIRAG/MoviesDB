import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slices/searchSlice";
import userNameReducer from "./slices/loginSlice";

export const mystore = configureStore({
  reducer: {
    search: searchReducer,
    name: userNameReducer,
  },
});
