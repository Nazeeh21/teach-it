import React from 'react'
import LearnerLayout from '../LearnerLayout'
import ExpertLayout from '../ExpertLayout'
import { EXPERT, LEARNER } from '../../constants'
import { useSelector } from 'react-redux'

const LayoutProvider = ({ children, alternate, rightContent, forAgora = false }) => {
  const userType = useSelector((state) => state.app.userType)

  if (userType === LEARNER) {
    return (
      <LearnerLayout alternate={alternate} rightContent={rightContent} forAgora={forAgora}>
        {children}
      </LearnerLayout>
    )
  }

  if (userType === EXPERT) {
    return (
      <ExpertLayout alternate={alternate} rightContent={rightContent} forAgora={forAgora}>
        {children}
      </ExpertLayout>
    )
  }
}

export default LayoutProvider
