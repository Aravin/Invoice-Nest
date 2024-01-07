import React from 'react';
import UserForm from '../../../component/User/UserForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Users' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <UserForm></UserForm>
    </div>
  );
}
