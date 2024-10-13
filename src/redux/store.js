import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/homeReducer";

export default configureStore({
  reducer: { homeReducer: homeReducer.reducer },
});
