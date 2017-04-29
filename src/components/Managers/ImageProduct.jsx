import React, { Component, PropTypes } from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon,Input,
} from 'antd';
import reqwest from 'reqwest';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class ImageProduct extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          label="请上传商品图"
          extra="123"
        >
           {getFieldDecorator('type', {
            rules: [
              { required: true, message: 'Please select the product image!' },
            ],
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请上传商品西详情图"
          extra="123"
        >
           {getFieldDecorator('type', {
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请上传商品属性图"
          extra="123"
        >
           {getFieldDecorator('type', {
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
            )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">完成</Button>
        </FormItem>
      </Form>
    );
  }
}

ImageProduct = Form.create({})(ImageProduct);

export default ImageProduct;