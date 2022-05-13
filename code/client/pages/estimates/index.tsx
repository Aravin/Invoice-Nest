import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import CreateEstimate from '../../component/Estimate/CreateEstimate'

const EstimatePage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Estimate"
        subTitle="Add New"
      />
      <CreateEstimate></CreateEstimate>
    </div>
  )
}

export default EstimatePage
