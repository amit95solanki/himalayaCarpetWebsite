import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section-padding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header text-center pb-5">
              <h2 className="gradient-text mt-5 mb-5">Contact Us</h2>
              <p>🏠 - Rangmahal Square ,North TT Nagar ,Bhopal, M.P. INDIA</p>
              <p>
                📱 -
                <a href="tel:+919335723032" className="contact-link">
                  (+91) 9770519653
                </a>
              </p>
              <p>
                📧 -
                <a href="mailto:carpetshimalaya@gmail.com" className="contact-link">
                  CARPETSHIMALAYA@GMAIL.COM
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="m-0">
          <Col lg={6} className="p-3 m-auto">
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d901.1429030809356!2d82.594594!3d25.38567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fdf91ea8f8dcb%3A0xb825fcc6a4835b04!2sJamunipur%20colony%20bhadohi%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1723668471389!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Himalaya Carpets"
              />
            </div>
          </Col>
          <Col lg={6} className="p-3 m-auto">
            <Form>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" required placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" required placeholder="Enter your email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} required placeholder="Your query here" />
                  </Form.Group>
                </Col>
                <Button
                  variant="warning"
                  size="lg"
                  className="btn-block mt-3"
                  style={{
                    background: 'linear-gradient(45deg, #898989, hsl(0, 0%, 20%) )',
                    color: 'white',
                  }}
                >
                  Send now
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
