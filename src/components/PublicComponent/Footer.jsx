import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-center p-2 pt-3">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <img src="/assets/HMLOGO.jpg" alt="Himalaya Carpet" height={40} width={60} />
        </div>
        <p className="text-white mb-0">📱 - +91-9335723032 , 📧 - CARPETSHIMALAYA@GMAIL.COM</p>
        <p className="text-white mb-0"> 2024© HIMALAYA ❤️ CARPETS</p>
        <p className="text-white mb-0"> Developed by softgenerate.com </p>
      </Container>
    </footer>
  );
};

export default Footer;
