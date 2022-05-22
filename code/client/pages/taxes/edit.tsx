import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import ItemForm from '../../component/Item/ItemForm'

const EditTaxPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Items"
        subTitle="Edit"
      />

      <ItemForm></ItemForm>
    </div>
  )
}

export default EditTaxPage

export const getServerSideProps = withPageAuthRequired();
