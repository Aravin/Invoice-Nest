import React from 'react';
import SalesPersonForm from '../../../component/SalesPerson/SalesPersonForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Sales Persons' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <SalesPersonForm />
    </div>
  );
}
