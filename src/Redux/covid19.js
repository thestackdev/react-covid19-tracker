import { createSlice, createAsyncThunk, Axios } from "Imports";
const GLOBAL_URL = "https://disease.sh/v3/covid-19/all";
const COUNTRIES_URL = "https://disease.sh/v3/covid-19/countries";

export const fetchGlobal = createAsyncThunk("covid19/fetchGlobal", async () => {
  const { data } = await Axios.get(GLOBAL_URL);
  return data;
});

export const fetchCountries = createAsyncThunk(
  "covid19/fetchCountries",
  async () => {
    const { data } = await Axios.get(COUNTRIES_URL);
    return data;
  }
);

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
  },
  extraReducers: {
    [fetchGlobal.pending]: (state, payload) => {
      // console.log(payload);
    },
    [fetchGlobal.fulfilled]: (state, { payload }) => {
      state.global = payload;
    },
    [fetchGlobal.rejected]: (state, payload) => {
      // console.log(payload);
    },
    [fetchCountries.pending]: (state, payload) => {
      // console.log(payload);
    },
    [fetchCountries.fulfilled]: (state, { payload }) => {
      state.countries = payload;
    },
    [fetchCountries.rejected]: (state, payload) => {
      // console.log(payload);
    },
  },
});

export const { updateSearchKey, updateSelectedCoords } = slice.actions;
export default slice.reducer;
