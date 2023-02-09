import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import map from './map.png';
import { FetchCountries } from '../redux/countries/Countries';
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
        <div className="HomeCard">
          <div className="card">
            <div className="homepage flex">
              <img src={map} alt="globe" />
              <div className="headDetails flex">

                <h3>World Globe</h3>
                <p className="population">
                  8.2B
                </p>

              </div>
            </div>
          </div>
        </div>
        <ul>
          <li className="description">
            <h4>Stats By Country</h4>
          </li>
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
