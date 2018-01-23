/**
 * Created by wenbo.kuang on 2018/1/22.
 */
import axios from 'axios';

//axios配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.github.com';

//http request拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(123);
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
      }
    }
    return Promise.reject(error.response.data)
  }
);

export default axios;


