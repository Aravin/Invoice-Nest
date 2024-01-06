import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import NextTopLoader from 'nextjs-toploader';
import AppLayout from '../component/Layouts/Layout';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
        <NextTopLoader color='#09d61d' height={5} />
        <UserProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </UserProvider>
    </>
  )
}