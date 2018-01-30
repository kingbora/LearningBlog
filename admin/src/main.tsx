/**
 * Created by wenbo.kuang on 2018/1/23.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import PageRouter from './app/PageRouter';

// 引入antd样式
import 'antd/dist/antd.css';
// 引入animate样式
import 'animate.css';

import './styles/app.scss';

import {rootReducers} from './app/reducers';
import {AppContainer} from "react-hot-loader";

const initialState = {};

const store: Store<any> = createStore(rootReducers, initialState);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <PageRouter />
    </Provider>
  </AppContainer>
  ,
  document.getElementById('app')
);