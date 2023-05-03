import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Col, Row } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import type { NextPage } from 'next'
import React, { } from 'react'
import CustomerForm from '../../component/Customer/CustomerForm'

const CustomerPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Customer"
        subTitle="Add New"
      />

      <CustomerForm></CustomerForm>
    </div>
  )
}

export default CustomerPage

export const getServerSideProps = withPageAuthRequired();
