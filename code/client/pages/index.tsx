import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import Dashboard from '../component/Dashboard/Index'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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

export const getServerSideProps = withPageAuthRequired();
