import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'

export default ({ children }) => {
  return (
    <React.Fragment>
      <LandingPageNavbar />
      {children}
    </React.Fragment>
  )
}
