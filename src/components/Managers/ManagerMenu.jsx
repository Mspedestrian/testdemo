import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Layout } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Link } from 'dva/router';


class ManageMenu extends React.Component {
  state = {
    current: '1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
        defaultSelectedKeys={['sub1']}
        style={{ height: '100%' }}
      >
          <Menu.Item key="6"><Link to="/showproducts"><span><Icon type="menu-fold" />全部商品</span></Link></Menu.Item>
          <Menu.Item key="7"><Link to="/showmessages"><span><Icon type="menu-fold" />全部信息</span></Link></Menu.Item>
          <Menu.Item key="8"><Link to="/addproduct"><span><Icon type="menu-fold" />添加商品</span></Link></Menu.Item>
          <Menu.Item key="9"><Link to="/addacticle"><span><Icon type="menu-fold" />添加信息</span></Link></Menu.Item>
      </Menu>
    );
  }
}

export default ManageMenu;