import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Success from '@/pages/success'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:'缴费详情'
      }
    }

  ]
});
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