import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';


// Users 的 Presentational Component
// 暂时都没实现
import DetailProduct from '../components/Managers/DetailProduct';

// 引入对应的样式
// 可以暂时新建一个空的

function Detailpro({ location, dispatch, detailproduct }) {

  const {currentItem, modalVisible,modalType,} = detailproduct;
   const detailProductProps={
    dataProduct: list,
  };

  return (
    <div>
      {/* 用户信息展示列表 */}
      <DetailProduct {...detailProductProps}  style={{clear:'left'}}/>
      {/* 添加用户 & 修改用户弹出的浮层 */}
    </div>
  );
}
// ？？
Detailpro.propTypes = {
  detailproduct: PropTypes.object,
};

function mapStateToProps({ detailproduct }) {
  return {detailproduct};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Detailpro);