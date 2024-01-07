'use client';

import { Breadcrumb, Button, Modal, Space, Table } from 'antd';
import axios from 'axios';
import type { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import {
  EditOutlined,
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
    process.env.API_PATH + '/organizations',
    fetcher
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const goToAddOrg = () => router.push(`/organizations/create?action=new`);
  const goToEditOrg = (id: string) =>
    router.push(`/organizations/create?action=edit&id=${id}`);

  const deleteOrg = async (id: string) => {
    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/organizations/' + id);
          router.replace('/organizations');
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
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
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
              onClick={() => goToEditOrg(record.organizationId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteOrg(record.organizationId)}
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
          { title: 'Organizations' },
          { title: 'List' },
        ]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={data?.map((v: any) => ({
          ...v,
          key: v.organizationId + '',
        }))}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}
