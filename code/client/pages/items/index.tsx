import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import CreateItem from '../../component/Item/CreateItem'

const CustomerPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Sales Person"
        subTitle="Add New"
      />

      <CreateItem></CreateItem>
    </div>
  )
}

export default CustomerPage
