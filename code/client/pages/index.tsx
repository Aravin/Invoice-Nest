import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import Dashboard from '../component/Dashboard/Index'

const Home: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Dashboard"
        subTitle=""
      />

      <Dashboard></Dashboard>
    </div>
  )
}

export default Home
