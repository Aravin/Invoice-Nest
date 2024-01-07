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
    process.env.API_PATH + '/users',
    fetcher
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const goToAddUser = () => router.push(`/users/create?action=new`);
  const goToEditUser = (id: string) =>
    router.push(`/users/create?action=edit&userId=${id}`);

  const deleteUser = async (id: string) => {
    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/users/' + id);
          router.replace('/users');
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
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
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
              onClick={() => goToEditUser(record.userId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteUser(record.userId)}
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
          { title: 'Users' },
          { title: 'List' },
        ]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={data?.map((v: any) => ({ ...v, key: v.userId + '' }))}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}
