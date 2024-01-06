import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import TaxForm from "../../../component/tax/TaxForm";
import { Breadcrumb } from "antd";

const CreateTaxPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ title: "Dashboard" }, { title: "Taxes" }, { title: "New" }]}
        className="p-4"
      />

      <TaxForm></TaxForm>
    </div>
  );
};

export default CreateTaxPage;

export const getServerSideProps = withPageAuthRequired();
