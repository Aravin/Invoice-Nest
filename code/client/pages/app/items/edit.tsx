import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import ItemForm from "../../../component/Item/ItemForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const EditItemPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Items" },
          { title: "Edit" },
        ]}
        className="p-4"
      />

      <ItemForm></ItemForm>
    </div>
  );
};

export default EditItemPage;

export const getServerSideProps = withPageAuthRequired();
