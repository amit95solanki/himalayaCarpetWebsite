import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleDialogDemo from '../../pages/product/SimpleDialogDemo';

const NavigationBar = () => {
  const [showFullName, setShowFullName] = useState(true);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setShowFullName((prevShowFullName) => !prevShowFullName);
        setFadeClass('fade-in');
      }, 1000); // Match the fade-out animation duration
    }, 4000); // Toggle every 4 seconds to allow time for both animations

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <div className={`${fadeClass} gradient-text`}>
            <strong>
              {showFullName ? (
                'Himalaya Carpet'
              ) : (
                <img src="/assets/HMLOGO.jpg" alt="Himalaya Carpet" height={30} width={60} />
              )}
            </strong>
          </div>

          {/* <span className="text-warning">A</span>W<span className="text-warning">H</span>S */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="gradient-text">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/company" className="gradient-text">
              The Company
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="gradient-text">
              Contact
            </Nav.Link>

            <SimpleDialogDemo />

            {/* <Nav.Link as={Link} to="/login" className="gradient-text">
              LOGIN
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
