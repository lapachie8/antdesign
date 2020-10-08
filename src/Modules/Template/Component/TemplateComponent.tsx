import { Button, Layout, Menu } from 'antd';
import {
  LeftOutlined,
  MoneyCollectOutlined,
  PieChartOutlined,
  RestOutlined,
  RightOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

interface IProps {
  handleToggleSider: any;
  siderIsOpen: boolean;
}

export default class TemplateComponent extends Component<IProps> {
  componentToggleSider() {
    return (
      <Button
        onClick={this.props.handleToggleSider}
        icon={this.props.siderIsOpen ? <LeftOutlined /> : <RightOutlined />}
      />
    );
  }
  render() {
    console.log(this.props.siderIsOpen);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={!this.props.siderIsOpen}
          trigger={this.componentToggleSider()}
        >
          <div className="logo">CMS</div>
          <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
            <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="supplier" icon={<SolutionOutlined />}>
              <Link to="/supplier">Supplier</Link>
            </Menu.Item>
            <Menu.Item key="inventory" icon={<RestOutlined />}>
              <Link to="/inventory">Inventory</Link>
            </Menu.Item>
            <Menu.Item key="sales" icon={<MoneyCollectOutlined />}>
              <Link to="/sales">Sales</Link>
            </Menu.Item>
            {/* <SubMenu key="user" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="team" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>{this.props.children}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
