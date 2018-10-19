import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)``;

function NavBrand(props) {
  return (
    <LinkStyled className="navbar-brand" to={props.to}>
      {props.linkText}
    </LinkStyled>
  );
}

NavBrand.propTypes = {
  to: PropTypes.string,
  linkText: PropTypes.string,
};

export default NavBrand;
