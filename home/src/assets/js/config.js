
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
            home:url+name+'/weixin/home/index.html?v=20160229',
        },
        //保洁
        home_baojie:{
            url1:url+namepay+'/guizhoubaojiepay.html?v=20160229/order',//支付订单
            url2:url+namepay+'/guizhoubaojiepay.html?v=20160229/'//立即预约
        }
    }

export default config