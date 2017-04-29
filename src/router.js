import React, {PropTypes} from 'react';
import {Router,Route} from 'dva/router';
import Users from './routes/Users';
import Login from './routes/Login';
import Manager from './routes/Manager';
import Addproduct from './routes/Addproduct';
import Acticle from './routes/Acticle';
import Detailpro from './routes/Detailpro';
import Messages from './routes/Messages';
import Products from './routes/Products';
import Imageproduct from './routes/Imageproduct';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login}/>
      <Route path="/manager" component={Manager}>
        <Route path="/users" component={Users}/>
        <Route path="/addproduct" component={Addproduct}/>
        <Route path="/addacticle" component={Acticle}/>
        <Route path="/showmessages" component={Messages}/>
        <Route path="/showproducts" component={Products}/>
        <Route path="/next/:productid" component={Imageproduct}/>  
      </Route>
      
    </Router>
  );
}