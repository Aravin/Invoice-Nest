import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import CustomerForm from "../../../component/Customer/CustomerForm";
import { Breadcrumb } from "antd";

const CustomerPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: "Dashboard" },
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
