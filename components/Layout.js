import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function ({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
