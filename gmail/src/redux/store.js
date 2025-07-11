import {configureStore} from "@reduxjs/toolkit"
import appreducer from "./appslice";

const store= configureStore({
  reducer:{
appslice:appreducer
  }
});
export default store;