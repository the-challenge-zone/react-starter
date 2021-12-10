import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // Add reducers here
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
