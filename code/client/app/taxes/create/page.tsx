import React from 'react';
import TaxForm from '../../../component/tax/TaxForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Taxes' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <TaxForm></TaxForm>
    </div>
  );
}
