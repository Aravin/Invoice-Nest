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
} from '@ant-design/icons';
import { useRouter } from 'next/router'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AppLayout({ children }: any) {

  const [collapsed, seCollapse] = useState(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    switch (e.key) {
      case 'dashboard':
        router.push('/');
        break;

      default:
        router.push(e.key)
        break;
    }
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick}>
          <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="invoices" icon={<BookOutlined />}>
            Invoices
          </Menu.Item>
          <Menu.Item key="estimates" icon={<SnippetsOutlined />}>
            Estimates
          </Menu.Item>
          <Menu.Item key="customers" icon={<UsergroupAddOutlined />}>
            Customers
          </Menu.Item>
          <Menu.Item key="items" icon={<AppstoreOutlined />}>
            Items
          </Menu.Item>
          <Menu.Item key="salesPersons" icon={<UserOutlined />}>
            Sales Persons
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
              <Button type="primary" shape="circle" size="middle" icon={<PlusOutlined />}>
              </Button>
            </div>
            <div className="flex gap-2">
              <div>
                <Dropdown overlay={menu} placement="bottomRight">
                  <Button type="primary" shape="circle" size="middle" icon={<SettingOutlined />} />
                </Dropdown>
                {/* <Button type="primary" shape="circle" size="middle" icon={<SettingOutlined />}>
                </Button> */}
              </div>
              <div>
                <Button type="primary" shape="circle" size="middle">
                  A
                </Button>
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
