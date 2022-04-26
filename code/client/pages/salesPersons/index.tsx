import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import CreateSalesPerson from '../../component/SalesPerson/CreateSalesPerson'

const salesPersonPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Sales Person"
        subTitle="Add New"
      />

      <CreateSalesPerson></CreateSalesPerson>
    </div>
  )
}

export default salesPersonPage
