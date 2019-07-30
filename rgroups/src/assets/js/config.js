var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/baofang';
var namepay='/pay';
window.config={
    //
        baseurl:url,
    //公共的请求地址
         URL:url+name+'/wechat/hexie/wechat/',
    //公共的底部跳转
    footer:{
        wuye:url+name+'/weixin/wuye/index.html?v=20162299',
        person:url+name+'/weixin/person/index.html?v=20160229',
        home:url+name+'/weixin/home/index.html?v=20160229'
    },
    // 集市
    group_onsalesindex:{
        url:url+name+'/weixin/group/onsalesindex.html'
    },
    //团购
    rgrops_url :{
        url:url+namepay+'/guizhourgroups.html?v=20160229'
    }

   
}

export default config