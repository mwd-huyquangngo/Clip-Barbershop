import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const InputStyled = styled.input`
  width: 100%;
  padding: 0px 15px;

  &:focus {
    outline: none;
    border: dotted 0.5px gray;
    border-radius: 10px;
  }

  ${media.lessThan('medium')`
    font-size: 15px;
  `};
`;

function Input(props) {
  return <InputStyled type="tel" placeholder={props.placeholder} required />;
}

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
