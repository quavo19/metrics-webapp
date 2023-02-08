import React from 'react';
import PropTypes from 'prop-types';
import './country.module.css';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { FetchCountries } from '../redux/countries/Countries';

const Country = ({
  name, flag, population, numericCode,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showdetails = () => {
    dispatch(FetchCountries(numericCode));
    navigate('/CountryDetails');
  };
  return (
    <div className="card">
      <div>
        <NavLink to={numericCode}>
          <button type="button" onClick={showdetails}>Click</button>
        </NavLink>
        <img src={flag} alt={name} id={numericCode} />
        <div>

          <h3>{name}</h3>
          <p className="population">
            {population}
          </p>

        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  numericCode: PropTypes.string.isRequired,
};

export default Country;
