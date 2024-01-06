import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import SalesPersonForm from "../../component/SalesPerson/SalesPersonForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const SalesPersonEditPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Sales Persons" },
          { title: "Edit" },
        ]}
        className="p-4"
      />

      <SalesPersonForm></SalesPersonForm>
    </div>
  );
};

export default SalesPersonEditPage;

export const getServerSideProps = withPageAuthRequired();
