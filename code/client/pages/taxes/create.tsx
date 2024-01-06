import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import TaxForm from "../../component/tax/TaxForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const CreateTaxPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Taxes" },
          { title: "New" },
        ]}
        className="p-4"
      />

      <TaxForm></TaxForm>
    </div>
  );
};

export default CreateTaxPage;

export const getServerSideProps = withPageAuthRequired();
