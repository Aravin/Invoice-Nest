import { Button, Modal, PageHeader, Space, Table } from 'antd'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { EditOutlined, EditFilled, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';

export default function SalesPersonListPage(props: any) {

  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddSalesPerson = () => router.push(`/salesPersons/create?action=new`);
  const goToEditSalesPerson = (id: string) => router.push(`/salesPersons/create?action=edit&id=${id}`);

  const deleteSalesPerson = async (id: string) => {

    confirm({
      title: 'Do you want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + '/sales-persons/' + id);
          router.replace('/salesPersons');
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
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditSalesPerson(record.salesPersonId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteSalesPerson(record.salesPersonId)} /></a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Sales Person"
        subTitle="Add New"
        extra={[
          <Button key="1" type="primary" icon={<EditOutlined />} onClick={goToAddSalesPerson}> Add Sales Person </Button>,
        ]}
      />

      <Table
        columns={columns}
        dataSource={props?.salesPersons}
        className='m-2'
        tableLayout='fixed'
        size='small'
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + '/sales-persons');

  return {
    props: {
      salesPersons: result.data,
    },
  }
}
