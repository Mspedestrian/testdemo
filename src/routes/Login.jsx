
// 采用 stateless 的写法
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import ManageLogin from '../components/Managelogin/ManageLogin';
// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Login.css';

function Login() {

   const manageLoginProps={
    
  };

  return (
    <div className={styles.login}>
      <ManageLogin/>
    </div>
  );
}

export default Login;