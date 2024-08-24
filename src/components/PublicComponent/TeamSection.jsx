import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// Uncomment and import your icons if needed
// import { BiTwitter, BiFacebook, BiLinkedin, BiInstagram } from 'react-icons/bi';

const TeamSection = () => {
  return (
    <section className="team-section">
      <Row>
        <Col md={12}>
          <div className="section-header text-center pb-5">
            <h2 className="gradient-text">Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img src="/assets/images/team-2.jpg" alt="John" className="img-fluid rounded-circle mt-1" />
              </div>
              <Card.Title className="py-2">Founder</Card.Title>
              <Card.Text>Mr. Ram Singh Verma</Card.Text>
              <div className="social">
                {/* Uncomment and use your icons */}
                {/* <BiTwitter className="text-dark mx-1" />
                <BiFacebook className="text-dark mx-1" />
                <BiLinkedin className="text-dark mx-1" />
                <BiInstagram className="text-dark mx-1" /> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img src="/assets/images/team-1.jpg" alt="Albert" className="img-fluid rounded-circle mt-1" />
              </div>
              <Card.Title className="py-2">Co-Founder</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img src="/assets/images/team-3.jpg" alt="Jennifer" className="img-fluid rounded-circle mt-1" />
              </div>
              <Card.Title className="py-2">Manager</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img src="/assets/images/team-4.jpg" alt="Lara" className="img-fluid rounded-circle mt-1" />
              </div>
              <Card.Title className="py-2">Technical Manager</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default TeamSection;
