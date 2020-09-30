import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../views/LandingPage/LandingPage'
import CreateService from '../pages/create-service/index'
import ExpertLayout from '../views/Expert/ExpertLayout'
import CompactServiceCard from '../views/Chat/CompactServiceCard/CompactServiceCard'
import SearchResult from '../views/SearchResult'
import TypeOfService from '../views/TypeOfService'
import LearnerLayout from '../views/Learner/LearnerLayout/index'
import Contacts from '../views/Chat/Contacts'
import Chat from '../views/Chat/Chat'
import MyServices from '../views/Common/MyServices/MyServices'

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
        {/* <LandingPage /> */}
        {/* <ExpertLayout rightContent={<TypeOfService />}>
          <SearchResult />
        </ExpertLayout> */}
        {/* <LearnerLayout alternate rightContent={<Contacts />}>
          <Chat />
        </LearnerLayout> */}
        <LearnerLayout>
          <MyServices />
        </LearnerLayout>
      </main>
    </div>
  )
}
