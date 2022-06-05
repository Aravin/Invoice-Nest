import '../styles/globals.css'
import type { AppProps } from 'next/app';
import AppLayout from '../component/Layouts/Layout';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from '@auth0/nextjs-auth0';
import {AccountContext, accountInfo, setAccountInfo} from '../contexts/accountContext';

function AccountApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <NextNProgress color='#09d61d' height={5} showOnShallow={true} />
      <UserProvider>
        <AccountContext.Provider value={{accountInfo, setAccountInfo}}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </AccountContext.Provider>
      </UserProvider>
    </>
  )
}

export default AccountApp
