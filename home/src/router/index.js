import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import index from '@/pages/index/index'//首页
import Baojie from '@/pages/baojie/baojie'//保洁 导航
import Rchang from '@/pages/baojie/rchang'// 日常保洁

Vue.use(Router)

let router= new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {path:'',component:index,meta: {title:'生活服务'}}
      ]
    },
    {
      path:'/baojie',
      name:'baojie',
      component:Baojie,
      meta:{
        title:'保洁'
      }
    },
    {
      path:'/rchang',
      name:'rchang',
      component:Rchang,
      meta:{
        title:'日常保洁'
      }
    },
   
  ]
})

////路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
  //动态改变title
  var flag;
  if(to.matched[0].name != "index"&& to.matched[0].name!='register') {
    flag=common.checkRegisterStatus();
    if(!flag) {
      return
    }
  }

  changeTitle(to.meta.title);
  next();
});

//动态改变title
function changeTitle(title) {
  title = title ? title : '生活服务';
  window.document.title = title;
};


export default router
