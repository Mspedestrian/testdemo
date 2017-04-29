import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import MessageList from '../components/Managers/MessageList';
import MessageSearch from '../components/Managers/MessageSearch';
// 引入对应的样式
// 可以暂时新建一个空的

function Messages() {

   
   const messagesListProps={
	};
  const messageSearchProps={};

  return (
    <div>
      <MessageSearch {...messageSearchProps}/>
      {/* 用户信息展示列表 */}
      <MessageList />
    </div>
  );
}

export default Messages;