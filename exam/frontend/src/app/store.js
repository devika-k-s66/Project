// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../features/registerSlice";

const store = configureStore({
  reducer: { 
    // counter: counterReducer 
    auth:registerSlice
},
});

export default store;
