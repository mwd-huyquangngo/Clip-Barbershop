import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselItemWraper = styled.div`
  height: 60vh;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

function CarouselItem(props) {
  let isActive = props.active;
  if (isActive === undefined) {
    isActive = '';
  }
  return (
    <CarouselItemWraper className={`carousel-item ${isActive}`}>
      <img className="d-block w-100" src={props.src} alt={props.alt} />
      <div className="carousel-caption d-none d-md-block">
        <h3>{props.caption}</h3>
        <p>{props.captionDetails}</p>
      </div>
    </CarouselItemWraper>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
CarouselItem.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.string,
  caption: PropTypes.string,
  captionDetails: PropTypes.string,
};

export default CarouselItem;
