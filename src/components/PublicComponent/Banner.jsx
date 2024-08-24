import React from 'react';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/images/carpet1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  return (
    <div style={bannerStyle}>
      <div>
        <h1 style={{ fontFamily: 'cursive' }}>The Company</h1>
        <h2 style={{ fontFamily: 'cursive' }}>
          Extra Extraordinary Art <br /> Team & Creative Milimalism Lovers
        </h2>
      </div>
    </div>
  );
};

export default Banner;
