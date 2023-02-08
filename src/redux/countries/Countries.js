import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const AvatarURL = 'https://restcountries.com/v2/all';

export const FetchCountries = (createAsyncThunk('contries/Countries', async () => {
  const CountriesList = await fetch(AvatarURL);
  const Data = await CountriesList.json();
  return Data;
}));

const CountryReducer = createSlice({
  name: 'matrixWebapp/',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCountries.fulfilled,
      (state, { payload }) => ({ ...state, Countrieslist: [...payload] }));
  },
});

export default CountryReducer.reducer;
