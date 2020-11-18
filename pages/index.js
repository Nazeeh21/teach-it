import React, { useEffect } from 'react'
import Head from 'next/head'
import LandingPage from '../views/LandingPage/LandingPage'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      router.push('/dashboard')
    }
  }, [])

  return (
    <div className="text-primary">
      <Head>
        <title>VideoWork</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  )
}
