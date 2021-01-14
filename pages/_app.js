import '../styles/globals.css'
import '../styles/tailwind.css'
import '../styles/Modal.css'
import { Provider } from 'react-redux'
import store from '../store'
import Header from '../components/Header'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useEffect } from 'react'
// import ("react-calendar/dist/Calendar.css");
import '../styles/Calendar.css'
// import ("react-clock/dist/Clock.css");
import '../styles/Clock.css'
// import ("./DateTimePicker.css");
import '../styles/DateTimePicker.css'

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
