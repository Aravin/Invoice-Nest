import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import CustomerForm from "../../../component/Customer/CustomerForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const CustomerPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Customers" },
          { title: "Edit" },
        ]}
        className="p-4"
      />

      <CustomerForm></CustomerForm>
    </div>
  );
};

export default CustomerPage;

export const getServerSideProps = withPageAuthRequired();
