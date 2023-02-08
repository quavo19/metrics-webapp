import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchCountries } from '../redux/countries/Countries';
import './countryList.module.css';
import Country from './Countries';

const CountryList = () => {
  const dispatch = useDispatch();
  const listCountries = useSelector((state) => state.CountryReducer);
  useEffect(() => {
    if (listCountries.length === 0) {
      dispatch(FetchCountries());
    }
  }, [dispatch, listCountries]);
  return (
    <>
      <div className="Country-list">
        <ul>
          <h4>Stats By Country</h4>
          {listCountries.Countrieslist ? listCountries.Countrieslist.map((country) => (
            <li key={country.numericCode}>
              <Country
                name={country.name}
                flag={country.flag}
                population={country.population}
                numericCode={country.numericCode}
              />
            </li>
          )) : <>Data Loading Please wait (:</> }
        </ul>
      </div>
    </>
  );
};

export default CountryList;
