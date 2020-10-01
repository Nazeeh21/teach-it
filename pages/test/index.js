import React from 'react'
import ExpertLayout from '../../layout/ExpertLayout/index'
import GeneralSetting from '../../views/Settings/General'
import ProfileSetting from '../../views/Settings/Profile'

const Index = () => {
  return (<div>
    <ExpertLayout alternate>
      {/* <GeneralSetting /> */}
      <ProfileSetting />
    </ExpertLayout>
  </div>)
}

export default Index