import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "homePage",
  initialState: { weather: null },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export default homeReducer;
export const homePageActions = { ...homeReducer.actions };
