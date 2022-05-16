import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import SalesPersonForm from '../../component/SalesPerson/SalesPersonForm'

const SalesPersonEditPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Sales Person"
        subTitle="Add New"
      />

      <SalesPersonForm></SalesPersonForm>
    </div>
  )
}

export default SalesPersonEditPage
