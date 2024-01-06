import { Breadcrumb, Button, Modal, Space, Table } from "antd";
import axios from "axios";
import type { GetServerSideProps } from "next";
import React, { useState } from "react";
import {
  EditOutlined,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

export default function TaxListPage(props: any) {
  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddTax = () => router.push(`/taxes/create?action=new`);
  const goToEditTax = (id: string) =>
    router.push(`/taxes/create?action=edit&taxId=${id}`);

  const deleteTax = async (id: string) => {
    confirm({
      title: "Do you want to delete this items?",
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + "/taxes/" + id);
          router.replace("/taxes");
          setSuccess(true);
        } catch (err) {
          console.error(err);
          setError(true);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right" as any,
      width: 100,
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>
            <Button
              icon={<EditFilled />}
              type="dashed"
              onClick={() => goToEditTax(record.taxId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteTax(record.taxId)}
            />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[{ title: "Dashboard" }, { title: "Taxes" }, { title: "New" }]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={props?.taxes}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + "/taxes");

  return {
    props: {
      taxes: result.data,
    },
  };
};
