import React, { useEffect } from 'react'
import LearnerLayout from '../LearnerLayout'
import ExpertLayout from '../ExpertLayout'
import { EXPERT, LEARNER } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { saveToken } from '../../store/actions/authActions'
import { SET_CURRENT_PROFILE } from '../../store/actionTypes'

const LayoutProvider = ({
  children,
  alternate,
  rightContent,
  forAgora = false,
  isForChat = false,
}) => {
  const userType = useSelector((state) => state.app.userType)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const profileId = window.localStorage.getItem('currentProfile')
    dispatch(saveToken(token))
    dispatch({ type: SET_CURRENT_PROFILE, id: profileId })
  }, [])

  if (userType === LEARNER) {
    return (
      <LearnerLayout
        alternate={alternate}
        rightContent={rightContent}
        forAgora={forAgora}
        isForChat={isForChat}
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
        isForChat={isForChat}
      >
        {children}
      </ExpertLayout>
    )
  }
}

export default LayoutProvider
