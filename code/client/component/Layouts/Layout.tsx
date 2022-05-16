// import Navbar from './navbar'
// import Footer from './footer'
import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Button, Dropdown } from 'antd';
import {
  UsergroupAddOutlined,
  PieChartOutlined,
  AppstoreOutlined,
  SnippetsOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  PlusOutlined,
  LogoutOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AppLayout({ children }: any) {

  const [collapsed, seCollapse] = useState(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    router.push(e.key);
  };

  const addNewMenu = (
    <Menu>
      <Menu.Item>Add Estimate</Menu.Item>
      <Menu.Item>Add Invoice</Menu.Item>
      <Menu.Item>Add Customer</Menu.Item>
      <Menu.Item>Add Item</Menu.Item>
      <Menu.Item>Add Sales Person</Menu.Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      <Menu.Item>Organization</Menu.Item>
      <Menu.Item>Users</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Taxes</Menu.Item>
    </Menu>
  );

  const accountMenu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>My Account</Menu.Item>
      <Menu.Item icon={<LogoutOutlined />}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={() => seCollapse(!collapsed)} >
        {
          !collapsed &&
          <div className="logo flex-1 text-center align-middle text-white text-lg font-bold pt-0.5">ResumeNest.com</div>
        }
        {
          collapsed &&
          <div className="logo flex-1 text-center align-middle text-white text-lg font-bold pt-0.5">RN</div>
        }
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick} >
          <Menu.Item key="/" icon={<PieChartOutlined />} >
            Dashboard
          </Menu.Item>
          <Menu.Divider dashed={true}></Menu.Divider>
          <Menu.Item key="/invoices" icon={<BookOutlined />}>
            Invoices
          </Menu.Item>
          <Menu.Item key="/estimates" icon={<SnippetsOutlined />}>
            Estimates
          </Menu.Item>
          <Menu.Divider dashed={true}></Menu.Divider>
          <Menu.Item key="/customers" icon={<UsergroupAddOutlined />}>
            Customers
          </Menu.Item>
          <Menu.Item key="/items" icon={<AppstoreOutlined />}>
            Items
          </Menu.Item>
          <Menu.Divider dashed={true}></Menu.Divider>
          <Menu.Item key="/salesPersons" icon={<UserOutlined />}>
            Sales Persons
          </Menu.Item>
          <Menu.Item key="/taxes" icon={<MoneyCollectOutlined />}>
            Taxes
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Customers">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content className="m-2 h-full">
          <div className="flex justify-between">
            <div>
              <Dropdown overlay={addNewMenu} placement="bottomLeft">
                <Button type="primary" shape="circle" size="middle" icon={<PlusOutlined />} />
              </Dropdown>
            </div>
            <div className="flex gap-2">
              <div>
                <Dropdown overlay={settingsMenu} placement="bottomRight">
                  <Button type="primary" shape="circle" size="middle" icon={<SettingOutlined />} />
                </Dropdown>
              </div>
              <div>
                <Dropdown overlay={accountMenu} placement="bottomRight">
                  <Button type="primary" shape="circle" size="middle"> A </Button>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="site-layout-background my-4 mx-1 overflow-y-scroll" style={{ 'height': '98%' }} >
            {children}
          </div>
        </Content>
        <Footer className="text-center"></Footer>
      </Layout>
    </Layout>
  )
}
