import { Form, Input, Button, Row, Tabs, Alert, InputNumber, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import CountrySelectField from '../Common/FormFields/CountryDropdown';
import CurrencySelectField from '../Common/FormFields/CurrencyDropdown';
import Loader from '../Loader/Loader';

export default function OrganizationForm() {

  const router = useRouter();
  const action = router.query?.action;
  const organizationId = router.query?.id;
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
          const result = await axios.get(process.env.API_PATH + '/organizations/' + organizationId);
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
        await axios.patch(process.env.API_PATH + '/organizations/' + organizationId, {...values, userId: 6});
      } else {
        console.log(values);
        await axios.post(process.env.API_PATH + '/organizations', {...values, userId: 6});
      }
      router.push('/organizations');
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
        isSuccess && <Alert message="New organization added successfully!" type="success" closable showIcon className='p-4' />
      }
      {
        isError && <Alert message="Unable to add/update the new organization, please try again!" type="error" closable showIcon className='p-4' />
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
          <Form.Item label="Name" name='name' required={true}>
            <Input />
          </Form.Item>

          <CountrySelectField />

          <CurrencySelectField />

          <Form.Item label="Address Line1" name='addressLine1'>
            <Input />
          </Form.Item>

          <Form.Item label="Address Line2" name='addressLine2'>
            <Input />
          </Form.Item>

          <Form.Item label="City" name='city'>
            <Input />
          </Form.Item>

          <Form.Item label="State" name='state'>
            <Input />
          </Form.Item>

          <Form.Item label="Zip" name='zip'>
            <Input />
          </Form.Item>

          <Form.Item label="GST" name='gst'>
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