import { PageHeader } from 'antd'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import React, { } from 'react'
import InvoiceForm from '../../component/Invoice/InvoiceForm'

export default function CreateInvoicePage(props: any) {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Invoice"
        subTitle="Add New"
      />
      <InvoiceForm props={props}></InvoiceForm>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const items = await axios.get(process.env.API_PATH + '/items');
  const customers = await axios.get(process.env.API_PATH + '/customers');
  const taxes = await axios.get(process.env.API_PATH + '/taxes');
  // const items = await axios.get(process.env.API_PATH + '/salesPersons');

  return {
    props: {
      items: items.data,
      customers: customers.data,
      taxes: taxes.data,
    },
  }
}
