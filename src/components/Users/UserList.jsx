import React, { Component, PropTypes } from 'react';

// 采用antd的UI组件
import { Table, message, Popconfirm } from 'antd';
import { Link } from 'dva/router';


const UserList = ({
    total,
    current,
    loading,
    dataSource,
}) => {
  const columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: '价钱',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },{
    title: '库存',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <Link to="/watchproduct">查看</Link>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

	// 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: ()=>{},
  };
  


  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
        style={{clear:'left'}}
      />
    </div>
  );
}

export default UserList;