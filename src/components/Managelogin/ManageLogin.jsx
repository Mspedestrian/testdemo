import React, { Component, PropTypes } from 'react';

import styles from './ManageLogin.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import reqwest from 'reqwest';
const FormItem = Form.Item;

class ManageLogin extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.fetch(values);

      }
    });
  }
  fetch = (params = {}) => {
     console.log('params:', params);
    reqwest({
      url: 'http://localhost:3000/account/login'   
      , method: 'post'
      , contentType: 'application/json;charset=utf-8'
      , data: JSON.stringify(params)
      , success:function(res){
        console.log(res);
        if(res.code=="001"){
          alert("登录成功");
          window.location.hash = "/manager";
        }
        else{
          alert("账户名密码不正确");
        }
      }
      ,fail:function(res){
        alert("登录失败");
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginform}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}
ManageLogin = Form.create({})(ManageLogin);
export default ManageLogin;
