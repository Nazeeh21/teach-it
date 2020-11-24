import React, { useEffect } from 'react'
import LearnerLayout from '../LearnerLayout'
import ExpertLayout from '../ExpertLayout'
import { EXPERT, LEARNER } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { saveToken } from '../../store/actions/authActions'

const LayoutProvider = ({
  children,
  alternate,
  rightContent,
  forAgora = false,
}) => {
  const userType = useSelector((state) => state.app.userType)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    dispatch(saveToken(token))
  }, [])

  if (userType === LEARNER) {
    return (
      <LearnerLayout
        alternate={alternate}
        rightContent={rightContent}
        forAgora={forAgora}
      >
        {children}
      </LearnerLayout>
    )
  }

  if (userType === EXPERT) {
    return (
      <ExpertLayout
        alternate={alternate}
        rightContent={rightContent}
        forAgora={forAgora}
      >
        {children}
      </ExpertLayout>
    )
  }
}

export default LayoutProvider
