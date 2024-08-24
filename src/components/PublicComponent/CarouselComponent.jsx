import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src="/assets/images/carpet1.jpg" alt="Slide 1" />
        <Carousel.Caption>
          <h1>HIMALAYA CARPETS</h1>
          <p>WE CRAFT RUGS WITH PASSION</p>
          {/* <Link
            className="btn"
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
            to="/login"
          >
            Click Me
          </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage src="/assets/images/carpet2.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h1>HIMALAYA CARPETS</h1>
          <p>WE CRAFT RUGS WITH PASSION</p>
          {/* <a
            href="#"
            className="btn "
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
          >
            Click Me
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/assets/images/carpet3.jpg" alt="Slide 3" />
        <Carousel.Caption>
          <h1>HIMALAYA CARPETS</h1>
          <p>WE CRAFT RUGS WITH PASSION</p>
          {/* <a
            href="#"
            className="btn "
            style={{
              background: 'linear-gradient(45deg, #f5f108, hsl(22, 98%, 47%))',
            }}
          >
            Learn more
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
