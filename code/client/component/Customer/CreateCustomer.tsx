/* eslint-disable react/jsx-no-undef */
import { Form, Input, Button, Checkbox, Select, DatePicker, Space, Table, Col, Row, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
const { TabPane } = Tabs;

export default function CreateCustomer() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="">
      <Form
        layout='horizontal'
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item label="First Name">
          <Input />
        </Form.Item>

        <Form.Item label="Last Name">
          <Input />
        </Form.Item>

        <Form.Item label="Company Name">
          <Input />
        </Form.Item>

        <Form.Item label="Email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone">
          <Input />
        </Form.Item>

        <Form.Item label="Website">
          <Input />
        </Form.Item>

        <Form.Item label="PAN">
          <Input />
        </Form.Item>

        <Form.Item label="GST">
          <Input />
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

        <Form.Item label="Remarks">
          <TextArea rows={2} />
        </Form.Item>

        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>

        <Row className='p-4 m-4 gap-4 justify-center'>
          <Button type="primary" size="large">Save</Button>
          <Button size="large">Cancel</Button>
        </Row>
      </Form>
    </div>
  )
}