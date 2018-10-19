import React from 'react';
import CarouselItem from './CarouselItem';

function Header() {
  return (
    <header>
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselIndicators" data-slide-to="1" />
          <li data-target="#carouselIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
          <CarouselItem
            active="active"
            src="http://placehold.it/1900x1080"
            alt="First Slide"
            caption="First Slide"
            captionDetails="This is a description for the first slide."
          />

          {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
          <CarouselItem
            src="http://placehold.it/1900x1080"
            alt="Second Slide"
            caption="Second Slide"
            captionDetails="This is a description for the second slide."
          />

          {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
          <CarouselItem
            src="http://placehold.it/1900x1080"
            alt="Third Slide"
            caption="Third Slide"
            captionDetails="This is a description for the third slide."
          />
        </div>

        {/* <!-- Left and right controls --> */}
        <a
          className="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
