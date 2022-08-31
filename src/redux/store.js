import { configureStore } from "@reduxjs/toolkit/";
import { pexelReducer } from "./reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "PEXELS",
  storage,
  // whiteList: [],
  // blackList:[]
};

const persistedReducer = persistReducer(persistConfig, pexelReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDafaultMiddleware) =>
    getDafaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
