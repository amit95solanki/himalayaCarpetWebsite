import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="about" className="about section-padding ">
      <Container>
        <Col md={12}>
          <div className="section-header text-center pb-5">
            <h2 className="gradient-text">
              <strong>Himalaya Carpet</strong>
            </h2>
            {/* <p>
              Under our trusted banner, we offer a comprehensive range of services delivered by our skilled team and
              network of expert contractors.
            </p> */}
          </div>
        </Col>
        <Row>
          <Col lg={4} md={12} className="col-12">
            <div className="about-img">
              <img src="/assets/images/carpet4.jpg" alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={8} md={12} className="ps-lg-5 mt-md-5">
            <div className="">
              <h5 style={{ textAlign: 'justify', fontFamily: 'cursive' }}>
                Himalaya Carpets is a Govt. recognized export house since 1990 dealing in various types of carpets,
                durries, mats, bathmats with a sole objective of providing standard quality and zero defect products to
                our numerous importers, wholesalers & retailers world wide.
              </h5>

              {/* <Button href="#" variant="warning">
                Learn more
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
