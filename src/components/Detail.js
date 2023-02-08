import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryDetail from './CountryDetails';
import Navbar from './Navbar';

const Detail = () => {
  const { topLevelDomain } = useParams();
  const countriesList = useSelector((state) => state.CountryReducer);
  let name = topLevelDomain;
  let content = '';
  if (countriesList.Countrieslist) {
    const country = countriesList.Countrieslist.filter((country) => (
      country.numericCode.toString() === topLevelDomain
    ))[0];
    name = country.name;
    content = (<CountryDetail country={country} />);
  }
  return (
    <div>
      <Navbar name={name} />
      {countriesList && (content)}
    </div>
  );
};

export default Detail;
