import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EXPERT, LEARNER } from '../../constants'
import LayoutProvider from '../../layout/LayoutProvider'
import ExpertDashboard from '../../views/ExpertDashboard'
import LearnerDashboard from '../../views/LearnerDashboard'
import { useRouter } from 'next/router'
import { fetchProfiles } from '../../store/actions/appActions'
import { saveToken } from '../../store/actions/authActions'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  let userType = useSelector((state) => state.app.userType)

  let token = useSelector((state) => state.auth.token)

  console.log('/dashboard', token)
  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (!token) {
      router.push('/')
    }

    if (token) {
      dispatch(fetchProfiles())
      dispatch(saveToken(token))
    }
  }, [])

  if (token == null) {
    return null
  }

  if (userType === LEARNER) {
    return (
      <LayoutProvider>
        <LearnerDashboard />
      </LayoutProvider>
    )
  }

  if (userType === EXPERT) {
    return (
      <LayoutProvider>
        <ExpertDashboard />
      </LayoutProvider>
    )
  }
}

export default Index
