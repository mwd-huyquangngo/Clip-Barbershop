import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import CallImg from './item_call.png';
import SeparateImg from './separate.png';

const CallingImgStyled = styled.div`
  width: 10%;
`;

const SeparateImgStyled = styled.img`
  width: 1px;
`;

const CallImgStyled = styled.img`
  width: 32px;
  padding-right: 3px;

  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 27px;
  `};
`;

function CallingImg() {
  return (
    <CallingImgStyled>
      <CallImgStyled src={CallImg} />
      <SeparateImgStyled src={SeparateImg} />
    </CallingImgStyled>
  );
}

export default CallingImg;
