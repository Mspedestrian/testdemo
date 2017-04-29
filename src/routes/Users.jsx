import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';


// Users 的 Presentational Component
// 暂时都没实现
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Users.less';

function Users({ location, dispatch, users }) {

  const {loading, list, total, current,currentItem, modalVisible, modalType} = users;
  const userSearchProps = {};
   const userListProps={
		dataSource: list,
		total,
		loading,
		current,
	};
  const userModalProps = {};

  return (
    <div className={styles.normal}>
      <UserSearch {...userSearchProps}/>
      {/* 用户信息展示列表 */}
      <UserList {...userListProps}  style={{clear:'left'}}/>
    </div>
  );
}
// ？？
Users.propTypes = {
  users: PropTypes.object,
};

function mapStateToProps({ users }) {
  return {users};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);