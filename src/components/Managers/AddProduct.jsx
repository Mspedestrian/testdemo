import React, { Component, PropTypes } from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,Input,
} from 'antd';
import reqwest from 'reqwest';
import { Link } from 'dva/router';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class AddProduct extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.fetch(values);
      }
    });
  }
  fetch = (params = {}) => {
     console.log('params:', params);
     var productid;
    reqwest({
      url: 'http://localhost:3000/commodity/addCommodity'   
      , method: 'post'
      , contentType: 'application/json;charset=utf-8'
      , data: JSON.stringify(params)
      , success:function(res){
        var productid=res.data.id;
        window.location.hash = "/next/"+productid;
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="增加商品"
        >
          <span className="ant-form-text"></span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请选择商品类别"
          hasFeedback
        >
          {getFieldDecorator('type', {
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          })(
            <Select placeholder="请选择商品类别">
              <Option value="1">立式锅炉</Option>
              <Option value="2">卧式锅炉</Option>
              <Option value="3">锅炉除尘设备</Option>
              <Option value="4">锅炉罐体专用封头</Option>
              <Option value="5">锅炉辅机</Option>
              <Option value="6">其他</Option>

            </Select>
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="请输入商品标题"
        >
          {getFieldDecorator('name',{
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          })(
            <Input type="input" placeholder='请输入商品标题' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="请输入商品描述"
        >
          {getFieldDecorator('detail')(
            <Input type="textarea" rows={4} placeholder='请输入商品描述' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请输入商品数量"
        >
          {getFieldDecorator('num', {
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          },{ initialValue: 1000 })(
            <InputNumber min={0} max={100000} />
          )}
          <span className="ant-form-text"> machines</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请输入商品价钱"
        >
          {getFieldDecorator('price', {
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          },{ initialValue: 1000 })(
            <InputNumber min={0} max={100000} />
          )}
          <span className="ant-form-text"> ￥</span>
        </FormItem>


        
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">下一页</Button>
        </FormItem>
      </Form>
    );
  }
}

AddProduct = Form.create({})(AddProduct);

export default AddProduct;