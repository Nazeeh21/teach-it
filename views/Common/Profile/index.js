import React from 'react'
import Profile from '../../../components/Profile/Profile'
import loremIpsum from '../../../utility/loremIpsum'

const Index = ({ profileData }) => {
  if (!profileData) {
    console.log('No profile data')

    return null
  }

  if (profileData) {
    console.log('Profile data valid')
  }

  return (
    <div className="w-full bg-white border-2 border-highlight rounded-sm flex flex-col p-6">
      <Profile profileData={profileData} />
    </div>
  )
}

export default Index
