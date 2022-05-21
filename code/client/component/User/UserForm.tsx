import { Form, Input, Button, Row, Tabs, Alert, InputNumber, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

export default function UserForm() {

  const router = useRouter();
  const action = router.query?.action;
  const userId = router.query?.id;
  const [isLoading, setLoader] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [form] = Form.useForm();

  // radio
  const [radioValue, setRadioValue] = React.useState(1);

  const onRadioChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      if (action === 'edit') {
        try {
          setLoader(true);
          const result = await axios.get(process.env.API_PATH + '/users/' + userId);
          form.setFieldsValue(result.data);
        } catch (err) {
          console.error(err);
          setError(true);
        } finally {
          setLoader(false);
        }
      }
    })();
  }, [])

  const onFinish = async (values: any) => {
    setLoader(true);

    try {
      if (action === 'edit') {
        await axios.patch(process.env.API_PATH + '/users/' + userId, values);
      } else {
        await axios.post(process.env.API_PATH + '/users', values);
      }
      router.push('/users');
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {
        isSuccess && <Alert message="New user added successfully!" type="success" closable showIcon className='p-4' />
      }
      {
        isError && <Alert message="Unable to add/update the new user, please try again!" type="error" closable showIcon className='p-4' />
      }
      {
        isLoading && <Loader />
      }
      {
        !isLoading &&

        <Form
          form={form}
          layout='horizontal'
          name="basic"
          labelCol={{ sm: { span: 8 }, lg: { span: 4 } }}
          wrapperCol={{ sm: { span: 12 }, lg: { span: 8 } }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="First Name" name='firstName' required={true}>
            <Input />
          </Form.Item>

          <Form.Item label="Last Name" name='lastName'>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name='email' required={true}>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name='phone'>
            <Input />
          </Form.Item>

          <Row className='p-4 m-4 gap-4 justify-center'>
            <Button type="primary" size="large" htmlType="submit">Save</Button>
            <Button size="large" onClick={router.back}>Cancel</Button>
          </Row>
        </Form>
      }
    </div>
  )
}