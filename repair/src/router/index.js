import Vue from 'vue'
import Router from 'vue-router'


import repair from '@/pages/repair/index'     //选择报修类型
import chooseRepair from '@/pages/repair/chooseRepair'  //
import SubmitSuccess from '@/pages/repair/success'  //报修成功页

import RepairSubmit from '@/pages/zhifu/repairSubmit'     //支付


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'repair',
      component:repair,
      meta:{
        title:'请选择报修类型'
      }
    },
    {
      path:'/submitSuccess',
      name:'submitSuccess',
      component:SubmitSuccess,
      meta:{
        title:'报修成功'
      }
    },
    {
      path:'/chooseRepair',
      name:'chooseRepair',
      component:chooseRepair,
      meta:{
        title:''
      }
    },
    {
      path:'/repairSubmit',
      name:'repairSubmit',
      component:RepairSubmit,
      meta:{
        title:''
      }
    },

  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
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
