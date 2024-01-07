'use client';

import React from 'react';
import CreateEstimate from '../../component/Estimate/CreateEstimate';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Estimates' },
          { title: 'List' },
        ]}
        className="p-4"
      />
      <CreateEstimate></CreateEstimate>
    </div>
  );
}
