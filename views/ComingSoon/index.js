import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'
import VideoWorkDesc from '../LandingPage/VideoWorkDesc'
import Footer from '../LandingPage/Footer'

const ComingSoon = () => (
  <div>
    <LandingPageNavbar />
    <div className="text-center text-5xl py-32">Coming Soon</div>
    <VideoWorkDesc />
    <Footer />
  </div>
)

export default ComingSoon
