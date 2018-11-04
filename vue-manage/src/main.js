// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username');
  if(!role && to.path !== '/login'){
    next('/login');
  }else if(to.meta.permission){
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403');
  }else{

      next();

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
