import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import React from "react";
import OrganizationForm from "../../../component/Organization/OrganizationForm";
import { Breadcrumb } from "antd";

const EditOrganizationPage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: "Dashboard" },
          { title: "Organizations" },
          { title: "Edit" },
        ]}
        className="p-4"
      />

      <OrganizationForm></OrganizationForm>
    </div>
  );
};

export default EditOrganizationPage;

export const getServerSideProps = withPageAuthRequired();
