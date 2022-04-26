import { Col, PageHeader, Row } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import CreateCustomer from '../../component/Customer/CreateCustomer'

const CustomerPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Customer"
        subTitle="Add New Customer"
      />

      <CreateCustomer></CreateCustomer>
    </div>
  )
}

export default CustomerPage
