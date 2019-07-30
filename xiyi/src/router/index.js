import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import xiyiList from '@/pages/xiyi_list'
import xiyiPay from '@/pages/xiyi_pay'
import Bags from '@/pages/bags'
import Introduce from '@/pages/introduce'
import xiyiDetail from '@/pages/xiyi_detail'
import Success from '@/pages/success'
Vue.use(Router)

let router= new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:''
      }
    },
    {
      path: '/xiyi_list',
      name: 'xiyi_list',
      component: xiyiList,
      meta:{
        title:''
      }
    },
    {
      path: '/bags',
      name: 'bags',
      component: Bags,
      meta:{
        title:''
      }
    },
    {
      path: '/xiyi_pay',
      name: 'xiyi_pay',
      component: xiyiPay,
      meta:{
        title:''
      }
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce,
      meta:{
        title:'服务价目'
      }
    },
    {
      path: '/xiyi_detail',
      name: 'xiyi_detail',
      component: xiyiDetail,
      meta:{
        title:''
      }
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      meta:{
        title:''
      }
    }

  ]
})

////路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
  //动态改变title
  changeTitle(to.meta.title);
  next();
});

//动态改变title
function changeTitle(title) {
  title = title ? title : '贵州幸福家园';
  window.document.title = title;
};


export default router
