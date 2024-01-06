import type { NextPage } from 'next'
import React, { } from 'react'
import UserForm from '../../../component/User/UserForm'
import { Breadcrumb } from 'antd'

const CreateUserPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ title: "Dashboard" }]}
        className="site-page-header"
      />
      {/* <PageHeader
        className="site-page-header"
        title="User"
        subTitle="Add New"
      /> */}

      <UserForm></UserForm>
    </div>
  )
}

export default CreateUserPage
