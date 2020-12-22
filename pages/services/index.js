import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutProvider from '../../layout/LayoutProvider'
import { fetchServices } from '../../store/actions/appActions'
import MyServices from '../../views/Common/MyServices/MyServices'

const Index = () => {
  const dispatch = useDispatch()
  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  useEffect(() => {
    if (token && profileId) {
      dispatch(fetchServices(token, profileId))
    }
  }, [token, profileId, dispatch])

  return (
    <LayoutProvider>
      <MyServices />
    </LayoutProvider>
  )
}

export default Index
