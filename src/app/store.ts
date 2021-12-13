import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // Add reducers here
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
