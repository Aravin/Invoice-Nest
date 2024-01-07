'use client';

import { Breadcrumb, Button, Modal, Space, Table } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import useSWR from 'swr';

export default function Page() {
  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    process.env.API_PATH + '/sales-persons',
    fetcher
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const goToAddSalesPerson = () =>
    router.push(`/sales-persons/create?action=new`);
  const goToEditSalesPerson = (id: string) =>
    router.push(`/sales-persons/create?action=edit&salesPersonId=${id}`);

  const deleteSalesPerson = async (id: string) => {
    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/sales-persons/' + id);
          router.replace('/sales-persons');
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
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
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
              onClick={() => goToEditSalesPerson(record.salesPersonId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteSalesPerson(record.salesPersonId)}
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
          { title: 'Sales Persons' },
          { title: 'List' },
        ]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={data?.map((v: any) => ({
          ...v,
          key: v.salesPersonId + '',
        }))}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}
