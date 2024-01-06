import type { NextPage } from "next";
import React from "react";
import UserForm from "../../../component/User/UserForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const CreateUserPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Users" },
          { title: "New" },
        ]}
        className="p-4"
      />

      <UserForm></UserForm>
    </div>
  );
};

export default CreateUserPage;
