import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import index from '@/pages/index/index'//首页
import Rgroupdetail from '@/pages/index/rgroupdetail'
import Rgroupinvite from '@/pages/index/rgroupinvite'//规则
import Sgrouprule from '@/pages/index/sgrouprule'//规则
import Buy from '@/pages/index/buy'//支付
import Success from '@/pages/index/success'//支付
Vue.use(Router)

let router= new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {path:'',component:index,meta:{title:'社区团购'}}
      ]
    },
    {
      path:'/rgroupdetail',
      name:'rgroupdetail',
      component:Rgroupdetail,
      meta:{
        title:''
      }
    },
    {
      path:'/rgroupinvite',
      name:'rgroupinvite',
      component:Rgroupinvite,
      meta:{
        title:''
      }
    },
    {
      path:'/sgrouprule',
      name:'sgrouprule',
      component:Sgrouprule,
      meta:{
        title:'团购规则'
      }
    },
    {
      path:'/buy',
      name:'buy',
      component:Buy,
      meta:{
        title:''
      }
    },
    {
      path:'/success',
      name:'success',
      component:Success,
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
