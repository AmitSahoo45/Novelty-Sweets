import Head from 'next/head'
import { Provider } from 'react-redux';

import store from '../constants/app/store'
import { Navbar, Footer } from '../components'
import { ProviderContext } from '../constants/context/ContextStore'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ProviderContext>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ProviderContext>
    </Provider>
  )
}

export default MyApp
