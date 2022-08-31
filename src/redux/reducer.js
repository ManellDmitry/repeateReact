import { createReducer } from "@reduxjs/toolkit";
import { setSearchValue, setImages } from "./action";

const initialState = { value: "", images: [] };

export const pexelReducer = createReducer(initialState, {
  [setSearchValue]: (state, action) => {
    return { ...state, value: action.payload };
  },

  [setImages]: (state, action) => {
    console.log(action.payload);
    return { ...state, images: action.payload };
  },
});
