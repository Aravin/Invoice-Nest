import { Button, Modal, PageHeader, Space, Table } from 'antd'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { EditOutlined, EditFilled, DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function UserListPage(props: any) {

  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddUser = () => router.push(`/users/create?action=new`);
  const goToEditUser = (id: string) => router.push(`/users/create?action=edit&id=${id}`);

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
  }

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
          <a><Button icon={<EditFilled />} type='ghost' onClick={() => goToEditUser(record.userId)} /></a>
          <a><Button icon={<DeleteFilled />} type='ghost' onClick={() => deleteUser(record.userId)} /></a>
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
          <Button key="1" type="primary" icon={<EditOutlined />} onClick={goToAddUser}> Add User </Button>,
        ]}
      />

      <Table
        columns={columns}
        dataSource={props?.users}
        className='m-2'
        tableLayout='fixed'
        size='small'
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + '/users');

  return {
    props: {
      users: result.data,
    },
  }
}
