import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

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
      <div className="HomeCard">
        <div className="card">
          <div className="homepage flex">
            <img src={country.flag} alt="flag" />
            <div className="headDetails flex">

              <h3>{country.name}</h3>
              <p className="population">
                {country.population}
              </p>

            </div>
          </div>
        </div>
      </div>
      <ul className="detail-list">
        <li className="description">
          <h4>City/Town Breakdown -2023</h4>
        </li>
        {ListDetail.map((item) => (
          <li className="list-detail flex" key={uuidv4()}>
            <span>{item.detail}</span>
            <div className="key-icon flex">
              <span className="value">{item.value}</span>
              <button type="button">
                <BsArrowRightCircle className="circle" size={22} />
              </button>
            </div>
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
