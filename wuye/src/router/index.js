import Vue from 'vue'
import Router from 'vue-router'

// import index from '@/pages/index' //物业首页
// import pay from '@/pages/pay/pay' //查询缴费
// import parkFees from '@/pages/pay/parkFees'  //停车缴费
// import payEnquiry from '@/pages/pay/payEnquiry' //缴费查询
// import myHouse from '@/pages/house/myHouse'   //我的房屋
// import addHouse from '@/pages/house/addHouse' //添加房屋
// import bindHouse from '@/pages/house/bindHouse'  //绑定房屋

// import butler from '@/pages/butler/index'   //我的管家
// import threadDetail from '@/pages/butler/threadDetail'    //消息回复

// import publish from '@/pages/repairs/index'   //发布
// import news from '@/pages/news/index'        //新闻资讯
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:resolve=>require(['@/pages/index'],resolve),
      meta:{
        title:'社区物业'
      },
    },
    {
      path:'/pay',
      name:'pay',
      component:resolve=>require(['@/pages/pay/pay'],resolve),
      meta:{
        title:'物业缴费'
      }
    },  
    {
      path:'/parkFees',
      name:'parkFees',
      component:resolve=>require(['@/pages/pay/parkFees'],resolve),
      meta:{
        title:'停车缴费'
      }
    },
    {
      path:'/payEnquiry',
      name:'payEnquiry',
      component:resolve=>require(['@/pages/pay/payEnquiry'],resolve),
      meta:{
        title:'缴费查询'
      }
    },
    {
      path:'/myHouse',
      name: 'myHouse',
      component:resolve => require(['@/pages/house/myHouse'],resolve),
      meta:{
        title: '我的房屋'
      }
    },
    {
      path: '/addHouse',
      name: 'addHouse',
      component: resolve => require(['@/pages/house/addHouse'],resolve),
      meta:{
        title:'添加房屋'
      }
    },
    {
      path: '/bindHouse/:number',
      name: 'bindHouse',
      component: resolve =>require(['@/pages/house/bindHouse'],resolve),
      meta:{
        title: '绑定房屋'
      }
    },
    {
      path: '/maintain',
      name: 'maintain',
      component: resolve =>require(['@/pages/butler/maintain'],resolve),
      meta:{
        title: ''
      }
    },
    {
      path: '/mysteward',
      name: 'mysteward',
      component: resolve =>require(['@/pages/butler/mysteward'],resolve),
      meta:{
        title: '管家服务'
      }
    },
    {
      path:'/threadDetail',
      name:'threadDetail',
      component: resolve =>require(['@/pages/butler/threadDetail'],resolve),
      meta:{
        title: ''
      }
    },
    {
      path:'/repair',
      name:'repair',
      component:resolve=> require(['@/pages/repairs/repair'],resolve),
      meta:{
      title:''
      }
    }, 
    {
      path:'/submitSuccess',
      name:'submitSuccess',
      component:resolve=> require(['@/pages/repairs/submitSuccess'],resolve),
      meta:{
      title:''
      }
    },
    {
      path:'/news',
      name:'news',
      component:resolve =>require(['@/pages/news/index'],resolve),
    },

  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
  var flag;
  if(to.matched[0].name != "index"&& to.matched[0].name!='register') {
    flag= common.checkRegisterStatus()
      if(!flag) {
        return
      }
  }
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '贵州幸福家园';
    window.document.title = title;
};

export default router
