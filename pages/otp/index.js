import React from 'react'
import { useRouter } from 'next/router'
import Otp from '../../views/Onboarding/Otp'
import LandingLayout from '../../layout/LandingLayout'

const Index = () => {
  return (
    <LandingLayout>
      <Otp />
    </LandingLayout>
  )
}

export default Index
