/* eslint-disable react/jsx-no-undef */
import { Form, Input, Button, Checkbox, Select, DatePicker, Space, Table, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

export default function CreateInvoice() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
      width: '20%'
    },
    {
      title: 'Item Description',
      className: 'description',
      dataIndex: 'description',
      // align: 'right',
      width: '50%'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      width: '10%'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '10%'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: '10%'
    },
  ];

  const data = [{}];

  return (
    <>
      <Form
        layout='horizontal'
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 9 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item label="Customer Name" name="layout">
          <Select
            showSearch
            placeholder="Select a Customer"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="Aravind A">Aravind A</Select.Option>
            <Select.Option value="Varun A">Varun Frontline</Select.Option>
            <Select.Option value="Nisha C">Nisha C</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Invoice Number">
            <Input />
          </Form.Item>

          <Form.Item label="Order Number">
            <Input />
          </Form.Item>

        <Form.Item label="Invoice Date">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Due Date">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Sales Person Name" name="layout">
          <Select
            showSearch
            placeholder="Select a Sales Person"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="Aravind A">Aravind A</Select.Option>
            <Select.Option value="Varun A">Varun Frontline</Select.Option>
            <Select.Option value="Nisha C">Nisha C</Select.Option>
          </Select>
        </Form.Item>



        <Row className='p-4 m-4'>
          <Col span={18}>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
            />
          </Col>
          <Col span={6}></Col>
        </Row>

        <Row className='p-4 m-4'>
          <Col span={12}></Col>
          <Col span={12}>
            <Form.Item label="Sub Total">
              <Input />
            </Form.Item>
            <Form.Item label="Tax">
              <Input />
            </Form.Item>
            <Form.Item label="Shipping Charge">
              <Input />
            </Form.Item>
            <Form.Item label="Discount">
              <Input />
            </Form.Item>
            <Form.Item label="Adjustment">
              <Input />
            </Form.Item>

            <Form.Item label="Total Amount">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    fieldKey={[fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'last']}
                    fieldKey={[fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List> */}


        <Form.Item label="Terms & Conditions">
          <TextArea rows={2} />
        </Form.Item>

        <Form.Item label="Footer Notes">
          <TextArea rows={2} />
        </Form.Item>

        <Row className='p-4 m-4 gap-4 justify-center'>
          <Button type="primary" size="large">Save</Button>
          <Button size="large">Cancel</Button>
        </Row>
      </Form>
    </>
  )
}