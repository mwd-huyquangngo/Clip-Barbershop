import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link).attrs({
  className: 'nav-link',
})`
  &&& {
    display: block;
    //color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover:not(.active) {
      background-color: #111;
    }

    &:active {
      color: white;
      font-weight: bold;
    }
  }
`;

function NavLink(props) {
  return <LinkStyled to={props.to}>{props.linkText}</LinkStyled>;
}

NavLink.propTypes = {
  to: PropTypes.string,
  linkText: PropTypes.string,
};

export default NavLink;
