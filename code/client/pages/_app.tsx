import '../styles/globals.css'
import type { AppProps } from 'next/app';
import AppLayout from '../component/Layouts/Layout';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider, withPageAuthRequired } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#09d61d' height={5} showOnShallow={true} />
      <UserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserProvider>
    </>
  )
}

export default MyApp
