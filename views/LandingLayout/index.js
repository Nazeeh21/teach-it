import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'
import BottomNavbar from '../LandingPage/BottomNavbar/BottomNavbar'
import Footer from '../LandingPage/Footer'

const Index = ({ children }) => {
  return (
    <React.Fragment>
      <LandingPageNavbar />
      {children}
      <BottomNavbar />
      <Footer />
    </React.Fragment>
  )
};

export default Index;
