import { Alert, Button, Modal, PageHeader, Space, Table } from 'antd'
import axios from 'axios';
import type { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { EditOutlined, EditFilled, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function CustomerPage(props: any) {

  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddCustomer = () => router.push(`/customers/create?action=new`);
  const goToEditCustomer = (id: string) => router.push(`/customers/create?action=edit&id=${id}`);

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
  }

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
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditCustomer(record.itemId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteCustomer(record.itemId)} /></a>
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

      {
        isSuccess && <Alert message="Customer deleted successfully!" type="success" closable showIcon className='p-4' />
      }
      {
        isError && <Alert message="Unable to delete the new customer, please try again!" type="error" closable showIcon className='p-4' />
      }

      <Table
        columns={columns}
        dataSource={props?.customers}
        scroll={{ x: 3000 }}
        className='m-2'
        tableLayout='fixed'
        size='small'
      />
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
