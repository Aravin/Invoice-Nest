import { Form, Input, Button, Row, Tabs, Alert, InputNumber, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { DispatchActionType } from '../Invoice/dispatchActionType';
import Loader from '../Loader/Loader';

export default function ItemForm({ dispatch, close }: any) {

  const router = useRouter();
  // const action = router.query?.action as string;
  const itemId = router.query?.itemId as string;
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
      if (itemId) {
        try {
          setLoader(true);
          const result = await axios.get(process.env.API_PATH + '/items/' + itemId);
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
    let newItem: any;

    try {
      if (itemId) {
        await axios.patch(process.env.API_PATH + '/items/' + itemId, values);
      } else {
        newItem = await (await axios.post(process.env.API_PATH + '/items', values)).data;
      }

      if (router.pathname.includes('/items')) {
        router.push('/items');
      } else {
        dispatch({ type: DispatchActionType.ADDED, newItem }); // callback fn from parent
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

  return (
    <div>
      {
        isSuccess && <Alert message="New item added successfully!" type="success" closable showIcon className='p-4' />
      }
      {
        isError && <Alert message="Unable to add/update the new item, please try again!" type="error" closable showIcon className='p-4' />
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

          <Form.Item label="Item Type" name='itemType' required={true}>
            <Radio.Group onChange={onRadioChange} value={radioValue}>
              <Radio value={1}>Product</Radio>
              <Radio value={2}>Service</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Name" name='name' required={true}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name='description'>
            <TextArea rows={2} />
          </Form.Item>

          <Form.Item label="Price" name='price' required={true}>
            <InputNumber min={1} max={999999999} />
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