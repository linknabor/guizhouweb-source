var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='';
var namepay='/pay';

window.config={
    //公共的请求地址
         URL:url+name+'/wechat/hexie/wechat/',
    //wuye支付成功
    wuye_zhifu:{
        url:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry'
    }
}

export default config