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

class Imageproduct extends React.Component {  
  constructor(props) {
    super(props);
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var proid=this.props.params.productid;
        values.pid=proid;
        console.log(values.pid);
        this.fetch(values);
      }
    });
  }
  fetch = (params = {}) => {
     console.log('params:', params);
    reqwest({
      url: 'http://localhost:3000/dist'   
      , method: 'post'
      , contentType: 'application/json;charset=utf-8'
      , data: JSON.stringify(params)
      , success:function(res){
        
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
    var prosid=this.props.params.productid;
    const props1 = {
      name: 'pro',
      action: 'http://localhost:3000/commodity/uploadPicture/'+prosid+"/1",
    
      listType:'picture',
      data:{
        cid:this.props.params.productid,
        type:1,
      },
    };
    const props2 = {
      name: 'pro',
      action: 'http://localhost:3000/commodity/uploadPicture/'+prosid+"/2",
    
      listType:'picture',
      data:{
        cid:this.props.params.productid,
        type:2,
      },
    };
    const props3 = {
      name: 'pro',
      action: 'http://localhost:3000/commodity/uploadPicture/'+prosid+"/3",
    
      listType:'picture',
      data:{
        cid:this.props.params.productid,
        type:3,
      },
    };
    console.log(this.props.params.productid);
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="请上传商品图"
          extra="123"
        >
           {getFieldDecorator('pro')(
            <Upload {...props1}>
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="请上传商品详情图"
          extra="123"
        >
           {getFieldDecorator('detail')(
            <Upload {...props2}>
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
           {getFieldDecorator('property')(
            <Upload {...props3}>
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

Imageproduct = Form.create({})(Imageproduct);



export default Imageproduct;