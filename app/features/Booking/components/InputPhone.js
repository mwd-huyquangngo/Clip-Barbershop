import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CallingImg from './CallingImg';
import Input from './Input';

const InputPhoneStyled = styled.div`
  display: flex;
  padding: 10px 0 5px 0;
  width: 100%;
`;

function InputPhone(props) {
  return (
    <InputPhoneStyled>
      <CallingImg />
      <Input placeholder={props.placeholder} />
    </InputPhoneStyled>
  );
}

InputPhone.propTypes = {
  placeholder: PropTypes.string,
};

export default InputPhone;
