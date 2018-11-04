import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '自述文件'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: {title: '系统首页'}
        },
        {
          path: '/table',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve),
          meta: { title: '基础表格' }
        },
        {
          path: '/tabs',
          component: resolve => require(['../components/page/Tabs.vue'], resolve),
          meta: { title: 'tab选项卡' }
        },
        {
          path: '/form',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve),
          meta: { title: '基本表单' }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
          meta: { title: 'schart图表' }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: resolve => require(['../components/page/DragList.vue'], resolve),
          meta: { title: '拖拽列表' }
        },
        {
          path: '/404',
          component: resolve => require(['../components/page/404.vue'], resolve),
          meta: { title: '404' }
        },

      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
    ]
})

