import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "",
  selectedCoords: { lat: 20, long: 77 },
  countries: [],
  global: {},
};

const slice = createSlice({
  name: "covid19",
  initialState: initialState,
  reducers: {
    updateSearchKey: (state, payload) => {
      state.searchKey = payload.payload;
    },
    updateSelectedCoords: (state, payload) => {
      const { lat, long } = payload.payload;
      state.selectedCoords = { lat, long };
    },
    updateGlobal: (state, payload) => {
      state.global = payload.payload.data;
    },
    updateCountries: (state, payload) => {
      state.countries = payload.payload.data;
    },
  },
});

export const {
  updateSearchKey,
  updateSelectedCoords,
  updateGlobal,
  updateCountries,
} = slice.actions;
export default slice.reducer;
