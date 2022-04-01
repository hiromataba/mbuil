import { combineReducers } from "@reduxjs/toolkit";
import building from "./slices/building";

const reducer = combineReducers({
  building,
});

export default reducer;