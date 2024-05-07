import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for persisting the Redux store
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // List of reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use the persisted reducer for auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore serialization check for persistence actions
      },
    }),
});

export const persistor = persistStore(store); // Persist the store
