import React from 'react'
import Dashboard from '../component/Dashboard/Index'
import PageBreadcrumb from '../component/Breadcrumb/Breadcrumb'

export default function Page() {

  return (
    <>
      <PageBreadcrumb title='Dashboard' subTitle='' />
      <Dashboard/>
    </>
  )
}
