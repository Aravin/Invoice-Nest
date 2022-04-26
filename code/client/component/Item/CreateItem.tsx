/* eslint-disable react/jsx-no-undef */
import { Form, Input, Button, Checkbox, Select, DatePicker, Space, Table, Col, Row, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
const { TabPane } = Tabs;

export default function CreateItem() {

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
        labelCol={{ sm: {span: 8}, lg: {span: 4} }}
        wrapperCol={{ sm: {span: 12}, lg: {span: 8} }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={2} />
        </Form.Item>

        <Form.Item label="Price">
          <Input />
        </Form.Item>

        <Form.Item label="Remarks">
          <TextArea rows={2} />
        </Form.Item>

        <Row className='p-4 m-4 gap-4 justify-center'>
          <Button type="primary" size="large">Save</Button>
          <Button size="large">Cancel</Button>
        </Row>
      </Form>
    </div>
  )
}