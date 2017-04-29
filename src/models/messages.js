import {hashHistory} from 'dva/router';
// import { testquery } from '../services/users';
import request from '../utils/request';
import qs from 'qs';
async function query(params) {
  return request(`http://www.baidu.com`);
}

export default {
  namespace: 'messages',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      history.listen(location => {
        if (location.pathname === '/showmessages') {
          dispatch({
            type: 'querySuccess',
            payload: {},
          });
        }
      });
    },
  },
  effects: { 
    *query({ payload }, { select, call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(query);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: 3,
            current: 1
          }
        });
      }
    },
    * create() {},
    * 'delete' () {},
    * update() {},
  },
  reducers: {
    showLoading(state, action){
      return { ...state, loading: true };
    }, // 控制加载状态的 reducer
    showModal() {}, // 控制 Modal 显示状态的 reducer
    hideModal() {},
    // 使用静态数据返回
    querySuccess(state, action){
      //  const mock = {
      //   total: 3,
      //   current: 1,
      //   loading: false,
      //   list: [
      //     {
      //       id: 1,
      //       title: '西安重污染天气Ⅰ级响应 20蒸吨以下燃煤锅炉全停用',
      //       author: '季小洁',
      //       date: '2017-3-1',
      //     },
      //     {
      //       id: 2,
      //       title: '西安重污染天气Ⅰ级响应 20蒸吨以下燃煤锅炉全停用',
      //       author: '季小洁',
      //       date: '2017-3-1',
      //     },
      //     {
      //       id: 3,
      //       title: '西安重污染天气Ⅰ级响应 20蒸吨以下燃煤锅炉全停用',
      //       author: '季小洁',
      //       date: '2017-3-1',
      //     },
      //   ],

      // };
      // return {...state, ...mock, loading: false};
      return {...state, ...action.payload, loading: false};
    },
    createSuccess() {},
    deleteSuccess() {},
    updateSuccess() {},
  }
}