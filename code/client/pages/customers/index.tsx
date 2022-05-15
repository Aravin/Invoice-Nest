import { PageHeader, Space, Table } from 'antd'
import axios from 'axios';
import type { GetServerSideProps } from 'next'
import React from 'react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
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
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

export default function CustomerPage(props: any) {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Customer"
        subTitle="List"
      />

      <Table columns={columns} dataSource={props?.customers} className='m-2'/>
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
