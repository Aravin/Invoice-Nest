import type { NextPage } from 'next'
import React, { } from 'react'
import UserForm from '../../../component/User/UserForm'
import { Breadcrumb } from 'antd'

const EditUserPage: NextPage = () => {
  return (
    <div>
      {/* <PageHeader
        className="site-page-header"
        title="User"
        subTitle="Edit"
      /> */}
      <Breadcrumb
        items={[{ title: "Dashboard" }]}
        className="site-page-header"
      />

      <UserForm></UserForm>
    </div>
  )
}

export default EditUserPage
