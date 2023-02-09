import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './countries/Countries';

const store = configureStore({
  reducer: {
    CountryReducer,
  },
});

export default store;
