
var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
/uat/.test(location.origin)?'https://uat.e-shequ.com':
'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.config = {
    URL:'https://test.e-shequ.com/wechat/hexie/wechat/',
    gotoGroupDetail:'https://test.e-shequ.com/dhzj3/weixin/group/rgroupinvite.html?',//团购详情
    home:'https://test.e-shequ.com/dhzj3/weixin/home/index.html?v=20160229',
}
export default config