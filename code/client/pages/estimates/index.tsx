import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import CreateInvoice from '../../component/Invoice/CreateInvoice'

const EstimatePage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Estimate"
        subTitle="Add New"
      />
      <CreateInvoice></CreateInvoice>
    </div>
  )
}

export default EstimatePage
