import React from "react";
import "./App.css";
import { Breadcrumb, Layout, Typography, Avatar, Menu} from "antd";
import { UserOutlined, MenuOutlined, DashboardOutlined, MessageOutlined, EditOutlined,UsergroupAddOutlined} from '@ant-design/icons';



// import SubMenu from 'antd/lib/menu/SubMenu';
// import { Typography } from 'antd';

const { Header, Footer, Sider, Content} = Layout;
const { Title } = Typography;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }}  icon={<UserOutlined />} />
          <Title style={{color:'white'}} level={3}><span><MenuOutlined /><span style={{ paddingLeft: 10 }}>SL Alert</span></span></Title>
        </Header>
      <Layout>
    
        
          <Sider style={{background:'#193657'}}>
            <Menu
            theme="dark"
            defaultSelectedKeys={['Dashboard']}
            mode="inline">
              <Menu.Item key='Dashboard'>
              <span><DashboardOutlined /><span>Dashboard</span></span>
              </Menu.Item>
              <Menu.Item key='DM'>
              <span><MessageOutlined /><span>Daily Messages</span></span>
              </Menu.Item>
              <Menu.Item key='CM'>
              <span><EditOutlined /><span>Content Management</span></span>
              </Menu.Item>
              <Menu.Item key='UM'>
              <span><UsergroupAddOutlined /><span>Users Management</span></span>
              </Menu.Item>
              <Menu.Item key='AM'>
              <span><UserOutlined /><span>Admin Management</span></span>
              </Menu.Item>
              {/* <SubMenu
                              title={
                                <span>
                                  <MailOutlined/>
                                  <span>About US</span>
                                </span>
                              }>
                <Menu.ItemGroup key='AboutUs' title='Messages'>
                  <Menu.Item key='d1'>Daily Messages</Menu.Item>
                  <Menu.Item key='d2'>Daily Messages</Menu.Item>
                
                </Menu.ItemGroup>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout>
          <Content style={{padding: '0 50px',}}>
        <Breadcrumb style={{ margin: '16px 0',}}>
        
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        {/* <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding:24, minHeight:749}}>Content</div>
    </Content>
    <Footer style={{textAlign: 'center'}}>
      SL Alert ??2022 Created by Derana Macroentertainment
    </Footer>
        </Layout>
       
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
