import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
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
      <div className="countryContainer">
        <div className="listimg">
          <img src={flag} alt={name} id={numericCode} />
          <NavLink to={numericCode}>
            <button type="button" onClick={showdetails}>
              <BsArrowRightCircle className="Circleicon" size={19} />
            </button>
          </NavLink>
        </div>
        <div className="name-pop flex">

          <h3>{name}</h3>
          <p>
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
