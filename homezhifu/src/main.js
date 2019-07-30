// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Qs from 'qs';
import axios from 'axios';
axios.defaults.withCredentials=true; //存储cookie？
import VueAxios from 'vue-axios';

import cookie from 'js-cookie'
import $ from 'jquery'

// import common from './assets/js/common.js'
// import config  from './assets/js/config'
Vue.prototype.common = common;
Vue.prototype.config = config;

Vue.use(MintUI);

import receiveData from './assets/js/receiveData'
Vue.prototype.receiveData = receiveData;

var axiosInstance = axios.create({
  transformRequest: [function (data) {
      data = JSON.stringify(data);
      return data;
  }],
  headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type':'application/json;charset=utf-8',
      // 'Content-Type':"application/json",

    
      'Accept': 'application/json',

  },
  baseURL:Vue.prototype.config.URL,

  withCredentials:true,
  transformResponse: [function (data) {//数据转换
    return data;
  }],
});
//创建axios拦截器 给请求头加cookie

axiosInstance.interceptors.request.use(
  config => {
      if( !cookie.get('session')){//没有seesion 判断  暂时跳过直接在首页就存seesion
        
      }else{//在请求头加 session
        config.headers.Cookie =`${ cookie.get('Cookie') }`
      }

       return config
  },
  err => {
      return Promise.reject(err)
  }
)

Vue.use(VueAxios, axiosInstance);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
