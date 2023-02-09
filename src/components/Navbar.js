import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AiFillAudio } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { returnpage } = props;
  return (
    <div className="navBar flex">
      {
          returnpage ? (
            <NavLink to="/">
              <div className="Arrow">
                <h3>
                  <IoChevronBackOutline size={25} className="iconBack" />
                </h3>
              </div>
            </NavLink>
          )
            : (
              <div className="flex">
                <IoChevronBackOutline size={25} className="iconBack" />
                <h3>2023</h3>
              </div>
            )
        }
      <div>
        {
          returnpage ? <h3>town/city Details</h3> : <h3>Countries</h3>
        }
      </div>
      <Row>
        <div>
          <AiFillAudio size={25} />
        </div>
        <div>
          <IoMdSettings size={25} />
        </div>
      </Row>
    </div>
  );
};

Navbar.propTypes = {
  returnPage: PropTypes.bool,
}.isRequired;

export default Navbar;
