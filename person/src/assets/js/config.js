var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/guizhou';
var namepay='/pay';
window.config={
    //公共的请求地址
         URL:url+name+'/wechat/hexie/wechat/',
    //公共的底部跳转
    footer:{
        wuye:url+name+'/weixin/wuye/index.html?v=20162299',
        person:url+name+'/weixin/person/index.html?v=20160229',
        group:url+name+'/weixin/group/onsalesindex.html?v=20160229'
    },
    //现金券
    person_coupons:{
        coupon:url+name+'/weixin/group/onsalesindex.html',
    },
    //person跳转支付页
    person_zhifu:{
        orderpays:url+namepay+'/guizhouorderpay.html?state=123#/repairPay?',//跳转支付
        comment:url+namepay+'/guizhouorderpay.html?state=123#/commentxiu',//跳转评论
        order:url+namepay+'/guizhouorderpay.html?start=123#/',//全部订单
        grouporders:url+namepay+'/guizhouorderpay.html?start=123#/grouporders',//团购订单
        homeorders:url+namepay+'/guizhouorderpay.html?start=123#/homeorders',//服务订单
    },
    //报修
    person_repair:{
        // url:url+name+'/weixin/wuye/index.html?state=123#/repair',//报修
        fuwux:url+name+'/weixin/wuye/index.html?state=123#/butler?category=0',//服务需求 
        butler:url+name+'/weixin/wuye/index.html?state=123#/mysteward',//建议
    },
   
    


   
}

export default config