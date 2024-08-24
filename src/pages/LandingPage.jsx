import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../components/PublicComponent/NavigationBar';
import CarouselComponent from '../components/PublicComponent/CarouselComponent';
import AboutSection from '../components/PublicComponent/AboutSection ';
import Banner from '../components/PublicComponent/Banner';
import CardSlider from '../components/PublicComponent/CardSlider';
import Footer from '../components/PublicComponent/Footer';
import SocialMediaBanner from '../components/PublicComponent/SocialMediaBanner';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Himalaya Carpets</title>
      </Helmet>
      <NavigationBar />
      <CarouselComponent />
      <AboutSection />
      <Banner />
      <CardSlider />
      <SocialMediaBanner />
      {/* <WhatsAppButton /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
