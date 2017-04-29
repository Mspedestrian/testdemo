import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import AddProduct from '../components/Managers/AddProduct';
// 引入对应的样式
// 可以暂时新建一个空的

function Addproduct() {

   const addProductProps={
    
  };

  return (
    <div>
      <AddProduct/>
    </div>
  );
}

export default Addproduct;
