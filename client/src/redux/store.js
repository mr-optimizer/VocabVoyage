import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { alertSlice } from "./alertSlice";
import { roomSlice } from "./roomSlice";

const rootReducer = combineReducers({
  alert: alertSlice.reducer,
  room: roomSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
