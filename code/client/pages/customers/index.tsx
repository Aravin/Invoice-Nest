import { Button, PageHeader, Space, Table } from 'antd'
import axios from 'axios';
import type { GetServerSideProps } from 'next'
import React from 'react'
import { EditOutlined, EditFilled, DeleteFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function CustomerPage(props: any) {

  const router = useRouter();

  const goToAddCustomer = () => router.push(`/customers/create?action=new`);
  const goToEditCustomer = (id: string) => router.push(`/customers/create?action=edit&id=${id}`);
  const deleteCustomer = async (id: string) => {
    await axios.delete(process.env.API_PATH + '/customers/' + id);
    router.replace('/customers');
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
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditCustomer(record.customerId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteCustomer(record.customerId)} /></a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Customer"
        subTitle="List"
        extra={[
          <Button key="1" type="primary" icon={<EditOutlined />} onClick={goToAddCustomer}> Add Customer </Button>,
        ]}
      />

      <Table columns={columns} dataSource={props?.customers} scroll={{ x: 3000 }} className='m-2' />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + '/customers');

  return {
    props: {
      customers: result.data,
    },
  }
}
