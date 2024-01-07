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
          { title: 'Items' },
          { title: 'New' },
        ]}
        className="p-4"
      />

      <ItemForm></ItemForm>
    </div>
  );
}
