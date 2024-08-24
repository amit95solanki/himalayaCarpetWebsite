import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ src, alt }) => <img src={src} className="d-block w-100" alt={alt} />;

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
