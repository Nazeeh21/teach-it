import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import LayoutProvider from '../../layout/LayoutProvider'
import EditService from '../../views/EditService'

const Index = () => {
  const userType = useSelector((state) => state.app.userType)
  const router = useRouter()

  // if (userType === 1) {
  //   router.push('/dashboard')
  //   return null
  // }
  return (
    <LayoutProvider>
      {userType === 1 ? (
        <div>You cant edit Service as a Seeker.</div>
      ) : (
        <EditService />
      )}
    </LayoutProvider>
  )
}

export default Index
