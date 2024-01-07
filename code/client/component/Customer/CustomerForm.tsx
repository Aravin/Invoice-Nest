'use client';

import { Form, Input, Button, Row, Alert } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CountrySelectField from '../Common/FormFields/CountryDropdown';
import Loader from '../Loader/Loader';
import { DispatchActionType } from '../Invoice/dispatchActionType';

export default function CustomerForm({ dispatch, close }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const customerId = searchParams?.get('customerId');

  const [isLoading, setLoader] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      if (customerId) {
        try {
          setLoader(true);
          const result = await axios.get(
            process.env.API_PATH + '/customers/' + customerId
          );
          form.setFieldsValue(result.data);
        } catch (err) {
          console.error(err);
          setError(true);
        } finally {
          setLoader(false);
        }
      }
    })();
  }, []);

  const onFinish = async (values: any) => {
    setLoader(true);
    let newCustomer: any;

    try {
      if (customerId) {
        await axios.patch(
          process.env.API_PATH + '/customers/' + customerId,
          values
        );
      } else {
        newCustomer = await (
          await axios.post(process.env.API_PATH + '/customers', values)
        ).data;
      }

      if (pathname?.includes('/customers')) {
        router.push('/customers');
      } else {
        dispatch({ type: DispatchActionType.ADDED, newCustomer }); // callback fn from parent
        close();
      }

      form.resetFields();
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

  const onValuesChange = async (values: any) => {
    try {
      await form.validateFields();
      setFormError(false);
    } catch (err) {
      setFormError(true);
    }
  };

  return (
    <div>
      {isSuccess && (
        <Alert
          message="New Customer added successfully!"
          type="success"
          closable
          showIcon
          className="p-4"
        />
      )}
      {isError && (
        <Alert
          message="Unable to add/update the new customer, please try again!"
          type="error"
          closable
          showIcon
          className="p-4"
        />
      )}
      {isLoading && <Loader />}
      {!isLoading && (
        <Form
          form={form}
          layout="horizontal"
          name="basic"
          labelCol={{ sm: { span: 8 }, lg: { span: 4 } }}
          wrapperCol={{ sm: { span: 12 }, lg: { span: 8 } }}
          initialValues={{}}
          onValuesChange={onValuesChange}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            required={true}
            rules={[
              {
                required: true,
                min: 3,
                max: 50,
                message: 'First name is required, min 3 and max 50 characters!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            required={true}
            rules={[
              {
                required: true,
                min: 1,
                max: 50,
                message: 'Last name is required, min 1 and max 50 characters!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Company Name" name="company">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input />
          </Form.Item>

          <Form.Item label="PAN" name="pan">
            <Input />
          </Form.Item>

          <Form.Item label="GST" name="gst">
            <Input />
          </Form.Item>

          <Form.Item label="Address Line 1" name="addressLine1">
            <TextArea rows={1} />
          </Form.Item>

          <Form.Item label="Address Line 2" name="addressLine2">
            <TextArea rows={1} />
          </Form.Item>

          <Form.Item label="City" name="city">
            <Input />
          </Form.Item>

          <Form.Item label="State" name="state">
            <Input />
          </Form.Item>

          <CountrySelectField />

          <Form.Item label="Zip" name="zip">
            <Input />
          </Form.Item>

          <Form.Item label="Remarks" name="remarks">
            <TextArea rows={2} />
          </Form.Item>

          <Row className="p-4 m-4 gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              disabled={formError}
            >
              Save
            </Button>
            <Button size="large" onClick={router.back}>
              Cancel
            </Button>
          </Row>
        </Form>
      )}
    </div>
  );
}
