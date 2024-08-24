import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Footer from '../components/PublicComponent/Footer';

import NavigationBar from '../components/PublicComponent/NavigationBar';
import SocialMediaBanner from '../components/PublicComponent/SocialMediaBanner';

const Company = () => {
  return (
    <>
      <NavigationBar />
      <section id="about" className="about section-padding ">
        <Container>
          <Col md={12}>
            <div className="section-header text-center pb-5">
              <h2 className="gradient-text my-5">Company</h2>
              <p style={{ textAlign: 'justify', fontFamily: 'cursive' }}>
                Since 1990, Himalaya Carpets has been recognized by the Government as an export house, specializing in
                various types of carpets, durries, mats, and bathmats. Our primary objective is to provide importers,
                wholesalers, and retailers worldwide with products of exceptional quality and zero defects.
                <br />
                <br />
                As a luxury designer brand, Himalaya Carpets has inherited a legacy of diligence and profound skills
                over the decades. We strive to maintain these values for years to come. Each carpet we create transports
                you to a realm of imagination, woven with the stories of skilled artisans who have contributed to
                crafting these masterpieces. Our ultimate goal is to bring India’s exquisite craftsmanship to the
                comfort of your home.
                <br />
                <br />
                Rooted in the town of BHADOHI, renowned as the carpet city in eastern Uttar Pradesh, our artistry dates
                back to the 16th century. Today, it stands as a significant carpet manufacturing center in India, known
                for its unmatched intricacy and artistry.
                <br />
                <br />
                Our commitment to quality is reflected in our use of unique natural materials and traditional handmade
                techniques, resulting in each carpet possessing its own distinct character. The main material, wool
                sourced from the Tibetan Highlands, is of the highest quality and durability.
                <br />
                <br />
                Customization is a hallmark of Himalaya Carpets, as each carpet can be uniquely designed in terms of
                size, format, and materials. Our modular system even allows for combining collections seamlessly.
                <br />
                <br />
                The process of carpet weaving requires perfect harmony and synchronized effort among our skilled
                artisans, reflecting the principles of precision and dedication.
                <br />
                <br />
                Our emphasis on certified quality and ethical practices is evident through our membership with Unicef,
                Care & Fair, and Rugmark foundation, ensuring adherence to labor codes and a commitment against child
                labor.
                <br />
                <br />
                Himalaya Carpets is trusted by esteemed clients, including prominent home stores across Europe, the USA,
                and Australia. Our responsible and responsive team prioritizes principles such as craftsmanship,
                quality, and ethical business practices.
                <br />
                <br />
              </p>
            </div>
          </Col>
        </Container>
      </section>
      <SocialMediaBanner />

      <Footer />
    </>
  );
};

export default Company;
