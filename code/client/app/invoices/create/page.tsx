"use client";

import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import InvoiceForm from "../../../component/Invoice/InvoiceForm";

export default function CreateInvoicePage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: "", title: <HomeOutlined /> },
          { title: "Invoices" },
          { title: "New" },
        ]}
        className="p-4"
      />
      <InvoiceForm></InvoiceForm>
    </div>
  );
}
