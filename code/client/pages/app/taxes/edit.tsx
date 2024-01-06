import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import ItemForm from "../../../component/Item/ItemForm";
import { Breadcrumb } from "antd";

const EditTaxPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ title: "Dashboard" }, { title: "Taxes" }, { title: "Edit" }]}
        className="p-4"
      />

      <ItemForm></ItemForm>
    </div>
  );
};

export default EditTaxPage;

export const getServerSideProps = withPageAuthRequired();
