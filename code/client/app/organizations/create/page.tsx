'use client';

import React from 'react';
import OrganizationForm from '../../../component/Organization/OrganizationForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Organizations' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <OrganizationForm />
    </div>
  );
}
