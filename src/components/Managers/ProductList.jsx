import React, { Component, PropTypes } from 'react';
import { Table,Popconfirm} from 'antd';
import reqwest from 'reqwest';
import { connect } from 'dva';
import { Link } from 'dva/router';
  

class ProductList extends React.Component {
   constructor(props) {
    super(props);
    this.columns = [{
    title: '编号',
    dataIndex: 'id',
    key:'id',
    width: '20%',
    }, {
    title: '名称',
    dataIndex: 'name',
    key:"name",
    width: '20%',
    }, {
    title: '价格',
    dataIndex: 'price',
    key:"price",
    sorter: (a, b) => a.price - b.price,
    }, {
    title: '库存',
    dataIndex: 'num',
    key:"num",
    }, {
    title: '分类',
    dataIndex: 'type',
    key:'type',
    filters: [
      { text: 1, value: "1"},
      
    ],
    onFilter: (value, record) => {
      // record.name.indexOf(value) ===0;
      
      var ss=parseInt(value);
      record.type===1;
      
    },
    },{
      title: '操作',
      key: 'operation',
      render: (text, record,index) => (
        <p>
          <Link to="/watchproduct">查看</Link>
          &nbsp;
          <Popconfirm title="确定要删除吗？" 
          onConfirm={()=>{
            var ss=text.id;
            var _this=this;
            reqwest({
              url: 'http://localhost:3000/commodity/deleteCommodity/'+ss,
              success:function(res){
                _this.onDelete(index);

              }
            });
            

          }}>
            <a>删除</a>
          </Popconfirm>
        </p>
    ),
  }];

    this.state = {
      data: [],
      pagination: {},
      loading: false,
    }
  }
  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
    });
  }
  onDelete = (index) => {
    const dataSource = [...this.state.data];
    dataSource.splice(index, 1);
    this.setState({ data:dataSource });
  }
  fetch = (params = {}) => {
    // console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'http://localhost:3000/commodity/getAllConmodity',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      pagination.total = data.data.length;
      // pagination.total = 200;
      this.setState({
        loading: false,
        data: data.data,
        pagination,
      });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return (
      <Table columns={this.columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}
ProductList.propTypes = {};
// export default connect()(ProductList);
export default ProductList;
