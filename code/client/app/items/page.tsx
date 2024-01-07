'use client';

import { Breadcrumb, Button, Modal, Space, Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import {
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export default function Page() {
  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    process.env.API_PATH + '/items',
    fetcher
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const goToAddItem = () => router.push(`/items/create?action=new`);
  const goToEditItem = (id: string) =>
    router.push(`/items/create?action=edit&itemId=${id}`);

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
  };

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
          <a>
            <Button
              icon={<EditFilled />}
              type="dashed"
              onClick={() => goToEditItem(record.itemId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteItem(record.itemId)}
            />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { href: '', title: <HomeOutlined /> },
          { title: 'Items' },
          { title: 'List' },
        ]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={data?.map((v: any) => ({ ...v, key: v.itemId + '' }))}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}
