import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import OrganizationForm from '../../component/Organization/OrganizationForm'

const EditOrganizationPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Organization"
        subTitle="Edit"
      />

      <OrganizationForm></OrganizationForm>
    </div>
  )
}

export default EditOrganizationPage

export const getServerSideProps = withPageAuthRequired();
