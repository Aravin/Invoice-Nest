import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import ItemForm from '../../component/Item/ItemForm'

const CreateItemPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Items"
        subTitle="Add New"
      />

      <ItemForm></ItemForm>
    </div>
  )
}

export default CreateItemPage
