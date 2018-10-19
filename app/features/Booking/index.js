/**
 *
 * HomePage
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled, { withTheme } from 'styled-components';
import media from 'styled-media-query';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './services/reducer';
import saga from './services/middleware';

import InputPhone from './components/InputPhone';
import ArrowRightImg from './components/arrowRight.png';

const BookingWrapper = styled.div`
  margin: 0 auto;
  border: solid 0.5px gray;
  border-radius: 15px;
  padding: 8px 15px 15px 15px;
  background-color: #fff;
  width: 540px;

  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 100%;
    padding: 5px 10px 10px 10px;
  `};
`;

const ButtonBooking = styled.div`
  width: 100%;
  background: #1b1b1b;
  text-align: center;
  color: #fff;
  height: 90px;
  border-radius: 10px;
  cursor: pointer;

  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    height: 75px;
  `};
`;

const BookingTitle = styled.p`
  font-size: 35px;
  padding-top: 10px;
  text-transform: uppercase;
  /* font-family: UTM Cafeta; */
  margin: 0px;

  ${media.lessThan('medium')`
    font-size: 22px;
    padding-top: 8px;
  `};
`;

const TextBook = styled.span`
  font-size: 17px;
  /* font-family: HelveticaVn-LtCn; */
  padding-bottom: 10px;

  ${media.lessThan('medium')`
    font-size: 12px;
  `};
`;
/* eslint-disable react/prefer-stateless-function */
export class Booking extends React.Component {
  render() {
    return (
      <BookingWrapper>
        <form>
          <InputPhone placeholder="* Nhập Số điện thoại (vd: 0987xxxxxx)" />
          <ButtonBooking>
            <BookingTitle>
              Đặt lịch giữ chỗ{' '}
              <img
                src={ArrowRightImg}
                style={{ width: '30px', paddingBottom: '10px' }}
                alt="Click here"
              />
            </BookingTitle>
            <TextBook>Cắt xong trả tiền. Huỷ lịch không sao.</TextBook>
          </ButtonBooking>
        </form>
      </BookingWrapper>
    );
  }
}

Booking.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // theme: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  // homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'booking', reducer });
const withSaga = injectSaga({ key: 'booking', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withTheme(Booking));
