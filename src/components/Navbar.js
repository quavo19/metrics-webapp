import React from 'react';
import { Row } from 'react-bootstrap';
import { AiFillAudio } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <NavLink to="/">
      <IoChevronBackOutline className="iconBack" />
    </NavLink>
    <div>
      <h3>Most views</h3>
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

export default Navbar;
