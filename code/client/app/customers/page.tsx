'use client';

import { Alert, Breadcrumb, Button, Modal, Space, Table } from 'antd';
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
    process.env.API_PATH + '/customers',
    fetcher
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const goToAddCustomer = () => router.push(`/customers/create?action=new`);
  const goToEditCustomer = (id: string) =>
    router.push(`/customers/create?action=edit&customerId=${id}`);

  const deleteCustomer = async (id: string) => {
    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/customers/' + id);
          router.replace('/customers');
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
      dataIndex: 'firstName',
      key: 'firstName',
      fixed: 'left' as any,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      fixed: 'left' as any,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Website',
      key: 'website',
      dataIndex: 'website',
    },
    {
      title: 'GST',
      key: 'gst',
      dataIndex: 'gst',
    },
    {
      title: 'PAN',
      key: 'pan',
      dataIndex: 'pan',
    },
    {
      title: 'Tax ID',
      key: 'taxId',
      dataIndex: 'taxId',
    },
    {
      title: 'Address Line1',
      key: 'addressLine1',
      dataIndex: 'addressLine1',
    },
    {
      title: 'Address Line2',
      key: 'addressLine2',
      dataIndex: 'addressLine2',
    },
    {
      title: 'City',
      key: 'city',
      dataIndex: 'city',
    },
    {
      title: 'State',
      key: 'state',
      dataIndex: 'state',
    },
    {
      title: 'Country',
      key: 'country',
      dataIndex: 'country',
    },
    {
      title: 'Zip',
      key: 'zip',
      dataIndex: 'zip',
    },
    {
      title: 'Remarks',
      key: 'remarks',
      dataIndex: 'remarks',
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
              onClick={() => goToEditCustomer(record.customerId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteCustomer(record.customerId)}
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
          { title: 'Customer' },
          { title: 'List' },
        ]}
        className="p-4"
      />

      {isSuccess && (
        <Alert
          message="Customer deleted successfully!"
          type="success"
          closable
          showIcon
          className="p-4"
        />
      )}
      {isError && (
        <Alert
          message="Unable to delete the new customer, please try again!"
          type="error"
          closable
          showIcon
          className="p-4"
        />
      )}

      <Table
        columns={columns}
        dataSource={data?.map((v: any) => ({ ...v, key: v.customerId + '' }))}
        scroll={{ x: 3000 }}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}
