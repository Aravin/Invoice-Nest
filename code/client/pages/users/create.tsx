import { PageHeader } from 'antd'
import type { NextPage } from 'next'
import React, { } from 'react'
import UserForm from '../../component/User/UserForm'

const CreateUserPage: NextPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="User"
        subTitle="Add New"
      />

      <UserForm></UserForm>
    </div>
  )
}

export default CreateUserPage
