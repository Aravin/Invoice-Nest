import { Breadcrumb, Button, Modal, Space, Table } from "antd";
import axios from "axios";
import type { GetServerSideProps } from "next";
import React, { useState } from "react";
import {
  EditOutlined,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

export default function InvoiceListPage(props: any) {
  const router = useRouter();
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const { confirm } = Modal;

  const goToAddInvoice = () => router.push(`/invoices/create?action=new`);
  const goToEditInvoice = (id: string) =>
    router.push(`/invoices/create?action=edit&invoiceId=${id}`);

  const deleteInvoice = async (id: string) => {
    confirm({
      title: "Do you want to delete this invoice?",
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await axios.delete(process.env.API_PATH + "/invoices/" + id);
          router.replace("/invoices");
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
      title: "Invoice Date",
      dataIndex: "invoiceDate",
      key: "invoiceDate",
    },
    {
      title: "Invoice #",
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
    },
    {
      title: "Order #",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "record.customer.firstName",
      render: (text: any, record: any) => (
        <span>{record.customer.firstName}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "invoiceStatus",
      key: "invoiceStatus",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
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
              onClick={() => goToEditInvoice(record.invoiceId)}
            />
          </a>
          <a>
            <Button
              icon={<DeleteFilled />}
              type="dashed"
              onClick={() => deleteInvoice(record.invoiceId)}
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
          { href: "", title: <HomeOutlined /> },
          { title: "Invoices" },
          { title: "List" },
        ]}
        className="p-4"
      />

      <Table
        columns={columns}
        dataSource={props?.invoices}
        className="m-2"
        tableLayout="fixed"
        size="small"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const result = await axios.get(process.env.API_PATH + "/invoices");

  return {
    props: {
      invoices: result.data,
    },
  };
};
