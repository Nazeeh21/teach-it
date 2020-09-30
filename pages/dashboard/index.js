import React from 'react'
import ExpertLayout from '../../views/Expert/ExpertLayout'
import LearnerLayout from '../../views/Learner/LearnerLayout'
import ExpertDashboard from '../../views/ExpertDashboard'
import { useSelector } from 'react-redux'
import { EXPERT, LEARNER } from '../../constants'

const Index = () => {
  const userType = useSelector((state) => state.userType)

  const Layout = ({ children }) => {
    if (userType === LEARNER) {
      return <LearnerLayout>{children}</LearnerLayout>
    }

    if (userType == EXPERT) {
      return <ExpertLayout>{children}</ExpertLayout>
    }
  }

  return (
    <Layout>
      <ExpertDashboard />
    </Layout>
  )
}

export default Index
