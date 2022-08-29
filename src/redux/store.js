import { configureStore } from "@reduxjs/toolkit/";
import { pexelReducer } from "./reducer";

export const store = configureStore({
  reducer: pexelReducer,
});
