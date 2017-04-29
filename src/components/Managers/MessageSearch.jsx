import React, { Component, PropTypes } from 'react';
import {Col} from 'antd';


// 采用 stateless 的写法

import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

class MessageSearch extends React.Component {
  render() {
    return (
      <Form>
        <FormItem>
            
            <InputGroup compact>
                <Input placeholder="please enter the message" style={{width:'300px',height:'36px'}}/>
                <Button type="primary" htmlType="submit" style={{height:'36px'}}>搜索</Button>
            </InputGroup>
        </FormItem>
      </Form>
      
    );
  }
}
export default MessageSearch;