import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'
import BottomNavbar from '../../views/LandingPage/BottomNavbar/BottomNavbar'
import Footer from '../../views/LandingPage/Footer'

const Index = ({ children }) => {
  return (
    <React.Fragment>
      <LandingPageNavbar />
      {children}
      <BottomNavbar />
      <Footer />
    </React.Fragment>
  )
}

export default Index
