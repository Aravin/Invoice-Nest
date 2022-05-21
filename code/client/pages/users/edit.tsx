import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import UserForm from '../../component/User/UserForm'

const EditUserPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="User"
        subTitle="Edit"
      />

      <UserForm></UserForm>
    </div>
  )
}

export default EditUserPage
