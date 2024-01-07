'use client';

import React from 'react';
import CustomerForm from '../../../component/Customer/CustomerForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Customers' },
          { title: 'Edit' },
        ]}
        className="p-4"
      />

      <CustomerForm></CustomerForm>
    </div>
  );
}
