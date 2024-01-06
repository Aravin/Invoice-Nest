import React, {  } from 'react'
import AppLayout from '../../component/Layouts/Layout';


export default function RootLayout({ children }: {
  children: React.ReactNode
}) {

  return (
    <AppLayout>
      {children}
    </AppLayout>
  )
}
