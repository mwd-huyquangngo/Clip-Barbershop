import React from 'react';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './logo.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="/">
            <Img src={Banner} alt="Clip Barbershop" />
          </a>
        </div>

        <NavBar>
          <HeaderLink to="/">Home</HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
