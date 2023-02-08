import React from 'react';
import PropTypes from 'prop-types';

const CountryDetail = (props) => {
  const { country } = props;
  const ListDetail = [];
  Object.keys(country).forEach((detail) => {
    if ((typeof country[detail] === 'string'
    || typeof country[detail] === 'number')
    && (detail !== 'alpha2Code'
      && detail !== 'alpha3Code'
      && detail !== 'flag'
    )) {
      return (
        ListDetail.push({ detail, value: country[detail] })
      );
    }
    return false;
  });
  return (
    <>
      <img src={country.flag} alt="flag" />
      <ul>
        {ListDetail.map((item) => (
          <li key={item.key}>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
CountryDetail.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryDetail;
