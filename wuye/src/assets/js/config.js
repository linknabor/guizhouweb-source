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
        wuye:url+name+'/weixin/wuye/index.html',
        person:url+name+'/weixin/person/index.html',
        home:url+name+'/weixin/home/index.html',
        group:url+name+'/weixin/group/onsalesindex.html'
    },
    //物业绑定房子
    house_domain: {
        domain:/127|test/.test(location.origin)?'test.e-shequ.com':
        /uat/.test(location.origin)?'uat.e-shequ.com':
        'www.e-shequ.com'
    },
    //物业支付跳转
    wuye_payment:{
        payment:url+namepay+'/guizhouwuyepay.html?#/?'//物业支付成功跳转
    },
    
}

export default config

