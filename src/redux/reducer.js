import { createReducer } from "@reduxjs/toolkit";

export const pexelReducer = createReducer(
  { searchValueImages: "", images: [], videos: [], searchValueVideo: "" },
  {
    "set/searchValue": (state, action) => {
      console.log("action", action.payload);
      return { ...state, searchValueImages: action.payload };
    },
  }
);
