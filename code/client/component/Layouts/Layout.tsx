// import Navbar from './navbar'
// import Footer from './footer'
import React, { useContext, useEffect, useState } from 'react'
// import 'antd/dist/antd.css';
import { Layout, Menu, Button, Dropdown, Select } from 'antd';
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
  ApartmentOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router'
import { useAppState } from '../../states/appState';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

export default function AppLayout({ children }: any) {

  const appState = useAppState((state) => state.appState);
  const setAccountInfo = useAppState((state) => state.setAccountInfo);
  const setTenantId = useAppState((state) => state.setTenantId);

  const { user, error, isLoading } = useUser();

  const [collapsed, seCollapse] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('layout useeffect');
    console.log({appState});

    if (!user) return;

    const fetchData = async () => {

      // account info start //
      if (appState.accountInfo) return;

      const userResponse = await axios.get(process.env.API_PATH + '/users/email/' + user?.email);
      let userInfo = userResponse.data;

      if (!userInfo) {
        const createUserResponse = await axios.post(process.env.API_PATH + '/users', { firstName: user?.name, email: user?.email });
        userInfo = createUserResponse.data;
      }

      setAccountInfo(userInfo);
      // account info ends //

      // tenant state start //
      if (userInfo?.organizations?.length) {
        setTenantId(userInfo.organizations[0].organizationId);
        router.push('/');
      }
      else {
        router.push('/organizations/create');
      }

      // tenant state ends //
    };

    fetchData();
  }, []);

  const handleClick = (e: any) => {
    console.log(e);
    router.push(e.key);
  };

  const addNewMenu = [
    // { key: '/estimates/create', label: 'Add Estimate' },
    { key: '/invoices/create', label: 'Add Invoice' },
    { key: '/customers/create', label: 'Add Customer' },
    { key: '/items/create', label: 'Add Item' },
    { key: '/taxes/create', label: 'Add Tax' },
  ];

  const settingsMenu = [
    { key: '/settings', label: 'Settings' },
    { key: '/users', label: 'Users' },
    { key: '/taxes', label: 'Taxes' },
  ];

  const accountMenu = [
    { key: '/account', label: 'My Account', icon: <UserOutlined /> },
    { key: '/organizations', label: 'Organization', icon: <ApartmentOutlined /> },
    { key: 'divider1', type: 'divider' },
    { key: 'api/auth/logout', label: 'Logout', icon: <LogoutOutlined /> },
  ];

  return (
    <Layout className="h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={() => seCollapse(!collapsed)} >
        {
          !collapsed &&
          <div className="logo flex-1 text-center align-middle text-white text-lg font-bold pt-0.5">InvoiceNest.com</div>
        }
        {
          collapsed &&
          <div className="logo flex-1 text-center align-middle text-white text-lg font-bold pt-0.5">IN</div>
        }
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick} items={[
          { key: '/', label: 'Dashboard', icon: <PieChartOutlined /> },
          { key: 'divider1', type: 'divider', dashed: true },
          { key: '/invoices', label: 'Invoices', icon: <BookOutlined /> },
          // { key: '/estimates', label: 'Estimates', icon: <SnippetsOutlined /> },
          { key: 'divider2', type: 'divider', dashed: true },
          { key: '/customers', label: 'Customers', icon: <UsergroupAddOutlined /> },
          { key: '/items', label: 'Items', icon: <AppstoreOutlined /> },
        ]} />
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content className="m-2 h-full">
          <div className="flex justify-between">
            <div>
              <Dropdown menu={{ items: addNewMenu, onClick: handleClick, triggerSubMenuAction: 'click' }} placement="bottomLeft">
                <Button type="primary" shape="circle" size="middle" icon={<PlusOutlined />} />
              </Dropdown>
            </div>
            <div className="flex gap-2">
              {
                appState.accountInfo?.organizations &&
                <div>
                  <Select defaultValue={appState.accountInfo?.organizations[0]?.organizationId} style={{ width: 150 }} onChange={(event) => setTenantId(event)}>
                    {
                      appState.accountInfo?.organizations?.map((org: any) => {
                        return <Option value={org.organizationId} key={org.organizationId}>{org.name}</Option>
                      })
                    }
                  </Select>
                </div>
              }

              <div>
                <Dropdown menu={{ items: settingsMenu, onClick: handleClick, triggerSubMenuAction: 'click' }} placement="bottomRight">
                  <Button type="primary" shape="circle" size="middle" icon={<SettingOutlined />} />
                </Dropdown>
              </div>
              <div>
                <Dropdown menu={{ items: accountMenu, onClick: handleClick, triggerSubMenuAction: 'click' }} placement="bottomRight">
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
