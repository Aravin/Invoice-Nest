import { Button, Modal, PageHeader, Space, Table } from 'antd'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { EditOutlined, EditFilled, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function OrganizationListPage(props: any) {

  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddOrg = () => router.push(`/organizations/create?action=new`);
  const goToEditOrg = (id: string) => router.push(`/organizations/create?action=edit&id=${id}`);

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
  }

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
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditOrg(record.organizationId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteOrg(record.organizationId)} /></a>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Organizations"
        subTitle="Add New"
        extra={[
          <Button key="1" type="primary" icon={<EditOutlined />} onClick={goToAddOrg}> Add Organization </Button>,
        ]}
      />

      <Table
        columns={columns}
        dataSource={props?.organizations}
        className='m-2'
        tableLayout='fixed'
        size='small'
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + '/organizations');

  return {
    props: {
      organizations: result.data,
    },
  }
}
