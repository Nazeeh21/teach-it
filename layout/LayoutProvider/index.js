import React from 'react'
import LearnerLayout from '../LearnerLayout'
import ExpertLayout from '../ExpertLayout'
import { EXPERT, LEARNER } from '../../constants'
import { useSelector } from 'react-redux'

const LayoutProvider = ({ children, alternate, rightContent }) => {
  const userType = useSelector((state) => state.userType)

  if (userType === LEARNER) {
    return (
      <LearnerLayout alternate={alternate} rightContent={rightContent}>
        {children}
      </LearnerLayout>
    )
  }

  if (userType === EXPERT) {
    return (
      <ExpertLayout alternate={alternate} rightContent={rightContent}>
        {children}
      </ExpertLayout>
    )
  }
}

export default LayoutProvider
