import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LayoutProvider from '../../layout/LayoutProvider'
import { fetchServices } from '../../store/actions/appActions'
import MyServices from '../../views/Common/MyServices/MyServices'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServices())
  }, [])

  return (
    <LayoutProvider>
      <MyServices />
    </LayoutProvider>
  )
}

export default Index