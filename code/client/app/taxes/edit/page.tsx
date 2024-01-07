import React from 'react';
import ItemForm from '../../../component/Item/ItemForm';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Taxes' },
          { title: 'Edit' },
        ]}
        className="p-4"
      />

      <ItemForm></ItemForm>
    </div>
  );
}
