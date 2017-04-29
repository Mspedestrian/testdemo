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
class AddActitle extends React.Component {
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
    reqwest({
      url: 'http://localhost:3000/article/addArticle'   
      , method: 'post'
      , contentType: 'application/json;charset=utf-8'
      , data: JSON.stringify(params)
      , success:function(res){
        console.log(res);
      }
    })
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
          label="信息发布"
        >
          <span className="ant-form-text"></span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请输入文章标题"
        >
          {getFieldDecorator('name',{
            rules: [
              { required: true, message: 'Please select product type!' },
            ],
          })(
            <Input type="input" placeholder='请输入文章标题' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="作者"
        >
          {getFieldDecorator('author')(
            <Input type="input" placeholder='作者' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="请输入文章描述"
        >
          {getFieldDecorator('content')(
            <Input type="textarea" rows={20} placeholder='请输入' />
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

AddActitle = Form.create({})(AddActitle);

export default AddActitle;