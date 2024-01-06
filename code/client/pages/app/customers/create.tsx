import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Breadcrumb, Col, Row } from "antd";
import type { NextPage } from "next";
import React from "react";
import CustomerForm from "../../../component/Customer/CustomerForm";
import { HomeOutlined } from "@ant-design/icons";

const CustomerPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Customers" },
          { title: "New" },
        ]}
        className="p-4"
      />

      <CustomerForm></CustomerForm>
    </div>
  );
};

export default CustomerPage;

export const getServerSideProps = withPageAuthRequired();
