import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import OrganizationForm from '../../component/Organization/OrganizationForm'

const CreateOrganizationPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Organization"
        subTitle="Add New"
      />

      <OrganizationForm></OrganizationForm>
    </div>
  )
}

export default CreateOrganizationPage
