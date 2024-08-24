import React from 'react';
import NavigationBar from '../components/PublicComponent/NavigationBar';
import Footer from '../components/PublicComponent/Footer';
import ContactSection from '../components/PublicComponent/ContactSection';
import SocialMediaBanner from '../components/PublicComponent/SocialMediaBanner';

const Contact = () => {
  return (
    <>
      <NavigationBar />
      <ContactSection />
      <SocialMediaBanner />

      <Footer />
    </>
  );
};

export default Contact;
