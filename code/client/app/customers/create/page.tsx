'use client';

import { Breadcrumb } from 'antd';
import React from 'react';
import CustomerForm from '../../../component/Customer/CustomerForm';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Customers' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <CustomerForm></CustomerForm>
    </div>
  );
}
