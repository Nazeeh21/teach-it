import '../styles/globals.css'
import '../styles/tailwind.css'
import '../styles/Modal.css'
import { Provider } from 'react-redux'
import store from '../store'
import Header from '../components/Header'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TimeAgo.addDefaultLocale(en)
  }, [])

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
