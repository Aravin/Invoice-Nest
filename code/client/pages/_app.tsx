import '../styles/globals.css'
import type { AppProps } from 'next/app';
import AppLayout from '../component/Layouts/Layout';
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#09d61d' height={5} showOnShallow={true} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp
