import { Button, Modal, PageHeader, Space, Table } from 'antd'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { EditOutlined, EditFilled, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function ItemListPage(props: any) {

  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddItem = () => router.push(`/items/create?action=new`);
  const goToEditItem = (id: string) => router.push(`/items/create?action=edit&id=${id}`);

  const deleteItem = async (id: string) => {

    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/items/' + id);
          router.replace('/items');
          setSuccess(true);
        } catch (err) {
          console.error(err);
          setError(true);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right' as any,
      width: 100,
      render: (text: any, record: any) => (
        <Space size="middle">
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditItem(record.itemId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteItem(record.itemId)} /></a>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Items"
        subTitle="Add New"
        extra={[
          <Button key="1" type="primary" icon={<EditOutlined />} onClick={goToAddItem}> Add Item </Button>,
        ]}
      />

      <Table
        columns={columns}
        dataSource={props?.items}
        className='m-2'
        tableLayout='fixed'
        size='small'
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + '/items');

  return {
    props: {
      items: result.data,
    },
  }
}
