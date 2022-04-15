import Script from 'next/script'

import 'animate.css/animate.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src='https://kit.fontawesome.com/abc21028e3.js'
        crossOrigin='anonymous'
      />
    </>
  )
}

export default MyApp
