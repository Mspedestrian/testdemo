import {
  hashHistory
} from 'dva/router';
export default {
  namespace: 'detailproduct',

  state: {
    list: [],
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
        if (location.pathname === '/watchproduct') {
          dispatch({
            type: 'querySuccess',
            payload: {},
          });
        }
      });
    },
  },
  effects: { * query() {},
    * create() {},
    * 'delete' () {},
    * update() {},
  },
  reducers: {
    showLoading() {}, // 控制加载状态的 reducer
    showModal() {}, // 控制 Modal 显示状态的 reducer
    hideModal() {},
    // 使用静态数据返回
    querySuccess(state) {
      const mock = {
        list: [{
          id: 1,
          title: '厂家直销金山口锅炉环保高效脱硫塔麻石水膜除尘器',
          price: 12345,
          number: 12345,
        }],

      };
      return {...state,
        ...mock,
      };
    },
    createSuccess() {},
    deleteSuccess() {},
    updateSuccess() {},
  }
}