import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../views/LandingPage/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>VideoWork</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <!-- Fonts --> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  )
}
