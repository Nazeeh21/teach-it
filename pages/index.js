import React, { useEffect } from 'react'
import LandingPage from '../views/LandingPage/LandingPage'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveToken } from '../store/actions/authActions'
import Header from '../components/Header'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      router.push('/dashboard')
      dispatch(saveToken(token))
    }
  }, [])

  return (
    <div className="text-primary">
      <main>
        <LandingPage />
      </main>
    </div>
  )
}
