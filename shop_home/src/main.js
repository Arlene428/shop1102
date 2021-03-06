// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入重置样式
import  "./assets/css/reset.css";
// 引入公共组件
import comComponents from "./components";
for(let i in comComponents){
  Vue.component(i,comComponents[i]);   //i是键名， comComponents[i]是键值
}
// 引入全局过滤器 
import comFilters from "./filters/index";
for(let i in comFilters){
  Vue.component(i,comFilters[i]);
}
// 引入store
import store from "./store/";
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({     
  el: '#app',
  router,
  store,     //局部实例化的store
  components: { App },
  template: '<App/>'
})
