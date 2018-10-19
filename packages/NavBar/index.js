import React from 'react';
import NavLink from './NavLink';
import NavBrand from './NavBrand';

class NavBar extends React.Component {
  componentDidMount() {
    $('.navbar-nav a').on('click', function() {
      $('.navbar-nav')
        .find('li.active')
        .removeClass('active');
      $(this)
        .parent('li')
        .addClass('active');
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavBrand to="/" linkText="Clip Barber Shop" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" linkText="Home" />
              </li>
              <li className="nav-item">
                <NavLink to="/booking" linkText="Booking" />
              </li>
              <li className="nav-item">
                <NavLink to="/link" linkText="About" />
              </li>
              <li className="nav-item">
                <NavLink to="/link" linkText="Services" />
              </li>
              <li className="nav-item">
                <NavLink to="/link" linkText="Contact" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
