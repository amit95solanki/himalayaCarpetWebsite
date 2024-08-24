import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header text-center pb-5">
              <h2 className="gradient-text">Our Project</h2>
              <p>
                we take pride in delivering high-quality services and exceptional results for a diverse range of
                projects.
                <br /> Here are some of our recently completed projects that showcase our expertise and commitment to
                excellence
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <Card className="text-center bg-light pb-2">
              <Card.Body className="text-dark">
                <div className="img-area mb-4">
                  <img src="/assets/images/project-1.jpg" className="img-fluid" alt="" />
                </div>
                <Card.Title>Building make</Card.Title>
                <Card.Text className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eos!
                </Card.Text>
                {/* <Button variant="warning" className="text-dark">
                  Read more
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Card className="text-center bg-light pb-2">
              <Card.Body className="text-dark">
                <div className="img-area mb-4">
                  <img src="/assets/images/project-2.jpg" className="img-fluid" alt="" />
                </div>
                <Card.Title>Building make</Card.Title>
                <Card.Text className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eos!
                </Card.Text>
                {/* <Button variant="warning" className="text-dark">
                  Read more
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Card className="text-center bg-light pb-2">
              <Card.Body className="text-dark">
                <div className="img-area mb-4">
                  <img src="/assets/images/project-3.jpg" className="img-fluid" alt="" />
                </div>
                <Card.Title>Building make</Card.Title>
                <Card.Text className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eos!
                </Card.Text>
                {/* <Button variant="warning" className="text-dark">
                  Read more
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
