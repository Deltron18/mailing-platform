import {createSlice} from "@reduxjs/toolkit"

const appslice = createSlice({
  name:"appslice",
  initialState:{
    open:false,
    emails:[],
    selectedemail:null,
    searchtext:"",
    user:null
  },
  reducers:{
    setOpen:(state,action)=>{
      state.open= action.payload;
    },
    setEmails:(state,action)=>{
      state.emails = action.payload;
    },
    setSelectedemail:(state,action)=>{
      state.selectedemail = action.payload;
    },
    setSearchtext:(state,action)=>{
      state.searchtext = action.payload;
    },
    setUser:(state,action)=>{
      state.user = action.payload;
    },
  }
})
export const {setOpen ,setEmails,setSelectedemail,setSearchtext,setUser} = appslice.actions;
export default appslice.reducer;
// appslice.js
// const initialState = {
//   open: false,
// };

// const appslice = createSlice({
//   name: 'appslice',
//   initialState,
//   reducers: {
//     setOpen: (state, action) => {
//       state.open = action.payload;
//     },
//   },
// });
// export const { setOpen } = appslice.actions;
