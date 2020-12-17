import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'
import AmazingMobileApp from './AmazingMobileApp/AmazingMobileApp'
import BottomNavbar from './BottomNavbar/BottomNavbar'
import EnablingVideoEntrep from './EnablingVideoEntrep/EnablingVideoEntrep'
import Footer from './Footer'
import FounderIntro from './FounderIntro/FounderIntro'
import IntroScreen from './IntroScreen/IntroScreen'
import JoiningCards from './JoiningCards/JoiningCards'
import LearnFromRangeOfExperts from './LearnFromRangeOfExperts/LearnFromRangeOfExperts'
import LearnOneOnOne from './LearnOneOnOne/LearnOneOnOne'
import LiveAndRichMedia from './LiveAndRichMedia/LiveAndRichMedia'
import VideoWorkDesc from './VideoWorkDesc'
import WhatMakesVideoWork from './WhatMakesVideoWork/WhatMakesVideoWork'
import WinMacbook from './WinMacbook/WinMacbook'

const LandingPage = () => {
  return (
    <div className="bg-lightGrey">
      <div className="bg-white">
        <LandingPageNavbar />
      </div>
      <IntroScreen />
      <LiveAndRichMedia />
      <LearnOneOnOne />
      <LearnFromRangeOfExperts />
      <EnablingVideoEntrep />
      <JoiningCards />
      <AmazingMobileApp />
      <WinMacbook />
      <WhatMakesVideoWork />
      <FounderIntro />
      <BottomNavbar />
      <VideoWorkDesc />
      <Footer />
    </div>
  )
}

export default LandingPage
