import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import ItemForm from "../../../component/Item/ItemForm";
import { Breadcrumb } from "antd";

const CreateItemPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ title: "Dashboard" }, { title: "Items" }, { title: "New" }]}
        className="p-4"
      />

      <ItemForm></ItemForm>
    </div>
  );
};

export default CreateItemPage;

export const getServerSideProps = withPageAuthRequired();
