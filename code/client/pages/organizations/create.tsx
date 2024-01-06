import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import OrganizationForm from "../../component/Organization/OrganizationForm";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const CreateOrganizationPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Organizations" },
          { title: "New" },
        ]}
        className="p-4"
      />

      <OrganizationForm></OrganizationForm>
    </div>
  );
};

export default CreateOrganizationPage;

export const getServerSideProps = withPageAuthRequired();
