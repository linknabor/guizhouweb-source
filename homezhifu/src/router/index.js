import Vue from 'vue'
import Router from 'vue-router'
import Border from '@/pages/border'
import borderdetail  from '@/pages/border-detail'
import Index from '@/pages/index';
import Success from '@/pages/success'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title:'保洁日常支付'
      }
    },
     {
       path:'/success',
       name:'success',
       component:Success,
       meta: {
         title:'预约成功'
       }
     },
     {
      path: '/order',
      name: 'border',
      component: Border,
      meta:{
        title:'订单列表'
      },
    },
    {
      path: '/borderdetail',
      name: 'borderdetail',
      component: borderdetail,
      meta:{
        title:'订单详情'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  //动态改变title
  changeTitle(to.meta.title)
  next();
});
//动态改变title
function changeTitle(title) {
  title = title ? title : '贵州幸福家园';
  window.document.title = title;
}
export default router
