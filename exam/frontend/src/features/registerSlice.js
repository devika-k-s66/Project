// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: { 
    auth:{
      name:"",
      email : "",
      password : ""
    }
   },
  reducers: {
    
    onChange:(state,action) =>{
        
      // state.name=action.payload.name
      // state.email=action.payload.email

      state.auth=action.payload

    }

  },
});

export const { onChange } = registerSlice.actions;
export default registerSlice.reducer;
