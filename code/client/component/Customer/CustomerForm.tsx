import { Form, Input, Button, Row, Alert } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import NextRouter, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

export default function CustomerForm(props: any) {

  const router = useRouter();
  const action = router.query?.action;
  const customerId = router.query?.id;
  const [isLoading, setLoader] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [form] = Form.useForm()

  useEffect(() => {
    (async () => {
      if (action === 'edit') {
        try {
          setLoader(true);
          const result = await axios.get(process.env.API_PATH + '/customers/' + customerId);
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
        await axios.patch(process.env.API_PATH + '/customers/' + customerId, values);
      } else if (action === 'new') {
        await axios.post(process.env.API_PATH + '/customers', values);
      } else {
        // show error 
      }
      router.push('/customers');
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
        isSuccess && <Alert message="New Customer added successfully!" type="success" closable showIcon className='p-4' />
      }
      {
        isError && <Alert message="Unable to add/update the new customer, please try again!" type="error" closable showIcon className='p-4' />
      }
      {
        isLoading && <Loader />
      }
      {
        !isLoading  &&
        <Form
          form={form}
          layout='horizontal'
          name="basic"
          labelCol={{ sm: { span: 8 }, lg: { span: 4 } }}
          wrapperCol={{ sm: { span: 12 }, lg: { span: 8 } }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item label="First Name"
            name='firstName'
            required={true}
            rules={[{ required: true, min: 3, max: 50, message: 'First name is required, min 3 and max 50 characters!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Last Name"
            name='lastName'
            required={true}
            rules={[{ required: true, min: 2, max: 50, message: 'Last name is required, min 2 and max 50 characters!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Company Name" name='company'>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name='email'>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name='phone'>
            <Input />
          </Form.Item>

          <Form.Item label="Website" name='website'>
            <Input />
          </Form.Item>

          <Form.Item label="PAN" name='pan'>
            <Input />
          </Form.Item>

          <Form.Item label="GST" name='gst'>
            <Input />
          </Form.Item>

          <Form.Item label="Address" name='address'>
            <TextArea rows={2} />
          </Form.Item>

          <Form.Item label="Remarks" name='remarks'>
            <TextArea rows={2} />
          </Form.Item>

          <Row className='p-4 m-4 gap-4 justify-center'>
            <Button type="primary" size="large" htmlType="submit">Save</Button>
            <Button size="large" onClick={NextRouter.back}>Cancel</Button>
          </Row>
        </Form>
      }
    </div>
  )
}