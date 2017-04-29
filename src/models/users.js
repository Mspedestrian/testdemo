import {hashHistory} from 'dva/router';
import query from '../services/users';

export default {
  namespace: 'users',

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
        if (location.pathname === '/users') {
          
          dispatch({
            type: 'query',
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
      // const ss=[
      //   {id:1,title:'123',price:123,number:123}
      // ];
      //  const mock = {
      //   total: 3,
      //   current: 1,
      //   loading: false,
        // list: [
        //   {
        //     id: 1,
        //     title: '厂家直销金山口锅炉环保高效脱硫塔麻石水膜除尘器举报',
        //     price: 12345,
        //     number: 12345,
        //   },
        //   {
        //     id: 2,
        //     title: '厂家直销金山口锅炉环保高效脱硫塔麻石水膜除尘器举报',
        //     price: 12345,
        //     number: 12345,
        //   },
        //   {
        //     id: 3,
        //     title: '厂家直销金山口锅炉环保高效脱硫塔麻石水膜除尘器举报',
        //     price: 12345,
        //     number: 2345,
        //   },
        // ],
      //   list:ss,
      // };
      // return {...state, ...mock, loading: false};
      return {...state, ...action.payload, loading: false};
    },
    createSuccess() {},
    deleteSuccess() {},
    updateSuccess() {},
  }
}