import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

export default function ListCustomer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(process.env.API_PATH + '/customers');
      console.log(result.data);

      setData(result.data);
    };

    fetchData();
  }, [])

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
