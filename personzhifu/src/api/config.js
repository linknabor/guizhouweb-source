
var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
/uat/.test(location.origin)?'https://uat.e-shequ.com':
'https://www.e-shequ.com';
var name='/guizhou';
var namepay='/pay';

window.config = {
    URL:'https://test.e-shequ.com/wechat/hexie/wechat/',
    gotoGroupDetail:'https://test.e-shequ.com/dhzj3/weixin/group/rgroupinvite.html?',//团购详情
    home:'https://test.e-shequ.com/dhzj3/weixin/home/index.html?v=20160229',
    wuye_zhifu:{
        url:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry',
        
    },
    //跳转到orderDetail
    guizhou_succ:{
        detail:url+name+'/weixin/person/index.html?#'
    }
}

export default config