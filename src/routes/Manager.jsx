import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import ManagerMenu from '../components/Managers/ManagerMenu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 引入对应的样式
// 可以暂时新建一个空的
export default React.createClass({
  render() {
    return (
      <Layout>
      <Header className="header" style={{height:'100px'}}>
          <div className="logo" style={{color:'white'}}>
              <h1 style={{padding:'0',margin:'0',marginTop:'10px'}}>锅炉设备管理平台</h1>
              <span style={{float:'right',marginTop:'-30px'}}>欢迎您|<Link to="/">退出</Link></span>
          </div>
            
      </Header>
      <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <ManagerMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 800 }}>
                {this.props.children}
            </Content>
          </Layout>
      </Layout>
    </Layout>
    );
  }
})