import type { NextPage } from "next";
import React from "react";
import CreateEstimate from "../../component/Estimate/CreateEstimate";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const EstimatePage: NextPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Estimates" },
          { title: "List" },
        ]}
        className="p-4"
      />
      <CreateEstimate></CreateEstimate>
    </div>
  );
};

export default EstimatePage;
