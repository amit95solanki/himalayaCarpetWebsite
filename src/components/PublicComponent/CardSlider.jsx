import React from 'react';
import Slider from 'react-slick';
import { Card, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="card-slider pb-5">
      <Row>
        <Col md={12}>
          <div className="section-header text-center pb-5">
            <h2 className="gradient-text">Product Gallery</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
          </div>
        </Col>
      </Row>
      <Slider {...settings}>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet5.webp" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet6.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet3.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet4.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet7.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet1.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet2.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
        <div className="">
          <div className="card">
            <img src="/assets/images/carpet1.jpg" className="card-img-top carpet-card" alt="Team Member" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      aria-label="Next slide"
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      aria-label="Previous slide"
    />
  );
};

export { NextArrow, PrevArrow };

export default CardSlider;
