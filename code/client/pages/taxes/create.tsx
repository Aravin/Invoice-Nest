import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import TaxForm from '../../component/Tax/TaxForm'

const CreateTaxPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Items"
        subTitle="Add New"
      />

      <TaxForm></TaxForm>
    </div>
  )
}

export default CreateTaxPage

export const getServerSideProps = withPageAuthRequired();
