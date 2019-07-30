<template>
  <div style="margin-bottom: 60px;" class="repars">
    <div id="zzmb" v-show="zzshow" class="zzmb" style="display:none;position:fixed;"></div>
    <div v-show="page== 'main'" class="address">
      <div class="addr_area" @click="choseAddress">
        <div class="topLine">
          <div class="topLineLeft">维修项目</div>
          <div class="topLineRight">{{project.name}}</div>
        </div>
        <div class="addrtop">&nbsp;</div>
        <div style="text-align:center;background-color: #f7f7f1;">
          <a href="#" class="add_address" v-show="!address.receiveName">选择收货地址</a>
        </div>
        <div class="custom-menu-link" v-show="address.receiveName">
          <a class="sustoma" href="#">
            <span>{{address.receiveName}}</span>
            <span style="margin-left:15px;">{{address.tel}}</span>
            <div
              class="addr_location"
            >{{address.province}}{{address.city}}{{address.county}}{{address.xiaoquName}}{{address.detailAddress}}</div>
          </a>
        </div>
        <div class="addrbottom">&nbsp;</div>
      </div>

      <div class="custom_menu">
        <div class="order_time">
          <span class="span1">所在小区</span>
          <span class="tip">{{address.xiaoquName}}</span>
        </div>
        <div class="order_time orderimg" id="timetaker">
          <span class="span1">预约上门时间：</span>
          <!-- <img src="../../assets/images/zhifu/btn_arrow_05_05.png" class="icon4"> -->
          <input class="date_pppp" id="datetimepicker2" v-model="requireDate">
          <span class="tip" v-show="!requireDate">
            请选择时间&nbsp;&nbsp;
            <!-- <strong>&gt;</strong> -->
          </span>
          <span class="tip">{{requireDate}}</span>
        </div>
        <div class="order_time orderimg" @click="chooseTeam">
          <span class="span1">优先服务对象</span>
          <span class="tip">
            {{assignTitle}}&nbsp;&nbsp;
            <!-- <strong>&gt;</strong> -->
          </span>
        </div>
        <div class="modal-mask" v-show="isChooseTeam" @click="hideTeam">
          <div class="modal">
            <div
              class="modal-select ptb15"
              :class="{checkedTeam:item.checked,liteDivider:'!$last'}"
              v-for="(item,index) in teamChoose"
              @click="teamChooseItem(index)"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="wenti">问题描述</div>

        <div>
          <textarea class="text" placeholder="输入问题描述内容..." v-model="memo"></textarea>
        </div>
        <div class="btn-fixed">
          <div href="#" class="btn" @click="submit">提交报修</div>
        </div>
      </div>
      <!-- 上传图片 -->
      <div class="photo_area">
        <div style="margin-top:15px;width:100%;height:40px">
          <div style="float: left;">上传照片</div>
          <div style="float: right;padding-right: 15px;color: #999">{{photos.length}}/6</div>
        </div>
        

        <div id="pic" class="pic_frame"></div>

        <div class="photo_wrap" style="margin: -2px;" @click="addPic" v-show="photos.length<6">
          <div class="photo addicon a_third_m22_height"></div>
        </div>
        <!-- <div class="pl15 pr15">
                    <div id="add" v-on:click="addPic"   class="add-pic-bg fl pl5"></div>
        </div>-->
      </div>
    </div>
    <!-- 选择地址 -->
    <div v-show="page=='list'" class="addrlist">
      <div v-show="lian=='chu'">
        <div
          class="plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers"
          v-for="(item,index) in addresses"
          @click="checks(item)"
          :key="index"
        >
          <i class="checkboxs" :class="{checkeds:address&&address.id===item.id}"></i>
          <div>
            <span style="margin-left:20px">{{item.receiveName}}</span>
            <span style="margin-left:15px">{{item.tel}}</span>
            <span class="mainlian" style="margin-left:15px" v-if="item.main">默认</span>
          </div>
          <div
            class="locations"
            style="margin-left:35px"
          >{{item.province}}{{item.city}}{{item.county}}{{item.locationAddr}}({{item.xiaoquName}}){{item.detailAddress}}</div>
        </div>
        <div class="tc mt2">
          <a class="btn-plain" @click="toAddAddress">新增收货地址</a>
          <br>
        </div>
      </div>

      <div v-show="lian=='xing'">
        <div class="input-wrap lite-divider menu-link" @click="showLocation">
          <span class="fl fs15">小区或大厦</span>
          <span class="fr fs14" v-if="submitAddress.xiaoquName==''">请选择小区</span>
          <span class="fr fs14" v-if="submitAddress.xiaoquName">{{submitAddress.xiaoquName}}</span>
        </div>

        <div class="input-wrap lite-divider menu-link menu-linka">
          <span class="fl fs15" style="color: #3b3937">所在地区</span>
          <span
            class="fr fs14"
          >{{submitAddress.province}}{{submitAddress.city}}{{submitAddress.county}}</span>
        </div>

        <div class="input-wrap lite-divider">
          <span class="fl fs15">小区地址</span>
          <span class="fr fs14">{{submitAddress.xiaoquAddr}}</span>
        </div>

        <div class="input-wrap lite-divider">
          <span class="fl fs15">联系人</span>
          <input
            placeholder="请输入联系人姓名"
            class="fr fs14 hidden-input"
            v-model="submitAddress.receiveName"
          >
        </div>

        <div class="input-wrap lite-divider">
          <span class="fl fs15">手机号</span>
          <input
            type="tel"
            placeholder="请输入手机号码"
            class="fr fs14 hidden-input"
            v-model="submitAddress.tel"
          >
        </div>

        <div class="input-wrap lite-divider">
          <span class="fl fs15">楼栋门牌号</span>
          <input
            placeholder="例如：1号楼402室"
            class="fr fs14 hidden-input"
            v-model="submitAddress.detailAddress"
          >
        </div>

        <a href="#" class="btns" @click="addAddressa">保存</a>
        <a href="#" class="btns" @click="addfan">返回列表</a>
      </div>

      <!-- 选择小区 -->
      <div v-if="lian== 'xuan' ">
        <div class="xiaoqu_title">选择您所在的小区</div>
        <div class="xiaoqu_list">
          <div
            v-for="(item,index) in xiaoqus"
            class="xiaoqu_item"
            :class="{'current':item.id== checkedXiaoqu.id}"
            @click="choseXiaoqu(index)"
          >{{item.xiaoquName}}</div>
        </div>
        <div class="xiaoqu_btn" @click="chosedXiaoqu">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>
let vm;
import wx from "weixin-js-sdk";
import { MessageBox } from "mint-ui";
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.js";
import "../../../node_modules/jquery-datetimepicker/build/jquery.datetimepicker.min.css";
export default {
  data() {
    return {
      zzshow: true,
      page: "main",
      projectId: this.$route.query.projectId,
      project: "", //报修项目详情
      address: {}, //报修地址
      photos: [],
      serviceItemId: 6,
      hours: 2,
      amount: 0,
      requireDate: "",
      realAmount: 0,
      memo: "",
      //    选择地址
      addresses: [],
      checkedAddress: {},
      lian: "chu",
      zhen: "from",
      Addprovince: [],
      Addtype: "",
      widgets: false,
      uploadPicId: "",
      checkedXiaoqu: { id: 0 },
      checkeditem: "",
      submitAddress: {
        xiaoquEntId: 0,
        receiveName: "",
        province: "",
        city: "",
        county: "",
        tel: "",
        xiaoquAddr: "",
        xiaoquName: "",
        id: 0,
        detailAddress: ""
      },
      isChooseTeam: false,
      assignType: 2,
      assignTitle: "智能推荐",
      teamChoose: [
        {
          name: "智能推荐",
          value: 1,
          checked: true
        },
        {
          name: "离我最近",
          value: 2,
          checked: false
        },
        {
          name: "服务最好",
          value: 3,
          checked: false
        },
        {
          name: "物业优先",
          value: 4,
          checked: false
        }
      ],
      distinct: "",
      selectRegion: false,
      currentRegionType: 1,
      //优惠券
      selectedIndex: -1,
      realMoney: 0,
      billId: "",
      xiaoqus: [
        // {
        //       city: "上海市",
        //       cityId: 3,
        //       county: "宝山区",
        //       countyId: 4,
        //       createDate: 1,
        //       id: 1,
        //       latitude: 31.364568,
        //       longitude: 121.36249,
        //       province: "上海",
        //       provinceId: 2,
        //       sort: 1,
        //       xiaoquAddr: "韶山路419弄",
        //       xiaoquId: 5,
        //       xiaoquName: "馨佳园一街坊"
        //     },
            // { xiaoquName: "递四方速递", id: "2" },
            // { xiaoquName: "第三范德萨发生的方的", id: "3" },
        // { xiaoquName: "第三范德萨范德萨方的", id: "4" }
      ]
    };
  },
  watch: {},
  created() {
    vm = this;
  },
  mounted() {
    this.common.checkRegisterStatus();

    this.initInfo();
    this.ready();
    this.wxdata();
  },
  components: {},
  methods: {
    queryXiaoquWithCache() {
      vm.receiveData.postData(vm,"/queryXiaoqus", null,"n", function() {
        if (vm.n.success) {
          vm.xiaoqus = vm.n.result;
        } else {
          alert("获取小区信息失败！");
          vm.xiaoqus = [];
        }
      });
    },
    choseXiaoqu(index) {
      vm.checkedXiaoqu = vm.xiaoqus[index];
    },
    chosedXiaoqu() {
      vm.submitAddress.xiaoquEntId = vm.checkedXiaoqu.id;
      vm.submitAddress.province = vm.checkedXiaoqu.province;
      vm.submitAddress.city = vm.checkedXiaoqu.city;
      vm.submitAddress.county = vm.checkedXiaoqu.county;
      vm.submitAddress.xiaoquAddr = vm.checkedXiaoqu.xiaoquAddr;
      vm.submitAddress.xiaoquName = vm.checkedXiaoqu.xiaoquName;
      vm.lian = "xing";
    },
    initTest() {
      let url1 = "/initSession4Test/105";
      vm.receiveData.getData(vm, url1, "data1", function() {});
    },
    ready() {
      $("#timetaker").click(function() {
        $("#datetimepicker2").datetimepicker("show");
      });
      $.datetimepicker.setLocale("ch");
      $("#datetimepicker2").datetimepicker({
        onChangeDateTime: function(x) {
          var dt = vm.formatDate(x, "yyyy-MM-dd hh:mm");
          if (vm.requireDate != dt) {
            vm.requireDate = dt;
          }
        },
        allowTimes: [
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00"
        ],
        format: "Y-m-d H:i",
        formatDate: "Y-m-d H:i"
      });
    },
    formatDate(date, fmt) {
      var currentDate = new Date(date);
      var o = {
        "M+": currentDate.getMonth() + 1, //月份
        "d+": currentDate.getDate(), //日
        "h+": currentDate.getHours(), //小时
        "m+": currentDate.getMinutes(), //分
        "s+": currentDate.getSeconds(), //秒
        "q+": Math.floor((currentDate.getMonth() + 3) / 3), //季度
        S: currentDate.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },

    initInfo() {
      let url = "repair/project/" + vm.projectId;
      vm.receiveData.getData(vm, url, "res", function() {
        if (vm.res.success) {
          if (vm.res.result.address) {
            vm.address = vm.res.result.address;
          }
          if (vm.res.result.project) {
            vm.project = vm.res.result.project;
          }
          //   vm.projectId = vm.res.result

          vm.zzshow = false;
        } else {
          alert(vm.res.message == null ? "获取项目信息失败！" : vm.res.message);
          vm.zzshow = false;
        }
      });
    },
    //点击切换地址
    choseAddress() {
      vm.page = "list";
      vm.dataAddress();
    },
    //获取地址
    dataAddress() {
      vm.receiveData.getData(vm, "/addresses", "data", function() {
        if (vm.data.success) {
          vm.addresses = vm.data.result;
        } else {
          vm.addresses = [];
        }
      });
    },
    //选择地址
    checks(item) {
      vm.address = item;
      vm.page = "main";
    },
    toAddAddress() {
      vm.lian = "xing";
       vm.submitAddress= {
        xiaoquEntId: 0,
        receiveName: "",
        province: "",
        city: "",
        county: "",
        tel: "",
        xiaoquAddr: "",
        xiaoquName: "",
        id: 0,
        detailAddress: ""
      }
    },


    adcheck() {
      vm.widgets = false;
    },

    chooseTeam() {
      vm.isChooseTeam = true;
    },
    hideTeam() {
      vm.isChooseTeam = false;
    },
    teamChooseItem(item) {
      console.log(item);
      for (var i = 0, len = vm.teamChoose.length; i < len; i++) {
        vm.teamChoose[i].checked = false;
      }
      vm.teamChoose[item].checked = true;
      vm.assignTitle = vm.teamChoose[item].name;
      vm.assignType = vm.teamChoose[item].value;
      vm.isChooseTeam = false;
    },
    //小区
    showLocation() {
      vm.lian = "xuan";

      vm.queryXiaoquWithCache();
    },

    //保存
    addAddressa() {
      if (!vm.submitAddress.xiaoquEntId) {
        alert("请选择小区！");
        return;
      }
      if (
        !vm.submitAddress.detailAddress ||
        !vm.submitAddress.receiveName ||
        !vm.submitAddress.tel
      ) {
        alert("请填写完整相关信息！");
        return;
      }
      if (!/^1[3-9][0-9]\d{4,8}$/.test(vm.submitAddress.tel)) {
        alert("请填写正确的手机号！");
        return;
      }
      vm.saveAddress();
    },
    /** 保存地址 */
    saveAddress() {
      var addr = {};
      addr.xiaoquId = vm.submitAddress.xiaoquEntId;
      addr.name = vm.submitAddress.receiveName;
      addr.tel = vm.submitAddress.tel;
      addr.detailAddr = vm.submitAddress.detailAddress;
      if (vm.submitAddress.id) {
        addr.addrId = vm.submitAddress.id;
      }
      vm.zzshow=true;
      vm.receiveData.postData(vm, "/saveAddressWithXiaoqu", addr, "n", function() {
        if(vm.n.success) {
          vm.addresses.push(vm.n.result);
          vm.checkedAddress = vm.n.result;
          vm.zzshow=false;
          vm.page = "list";
          // vm.page="main"
          vm.lian = "chu";

        }else{
            alert(vm.n.message==null?"地址保存失败，请重试！":vm.n.message);
        }
      });
    },
    //返回列表
    addfan() {
      vm.lian = "chu";
    },
    submit() {
      // console.log(vm.memo);
      if (vm.requireDate == "") {
        alert("请选择预约维修时间");
        return;
      }
      if (vm.address == {}) {
        alert("请选择服务的地址");
        return;
      }
      if (!vm.projectId || vm.projectId == 0) {
        alert("页面异常，请重新选择项目后重试！");
        return;
      }
      var pic_length = $("[name='pics']").length;
      if (pic_length > 0) {
        vm.uploadToWechat();
      } else {
        vm.selers();
      }

    },
    selers(){
         let data = {};
      data.addressId = vm.address.id;
      data.projectId = vm.projectId;
      data.assignType = vm.assignType;
      data.imgUrls = vm.uploadPicId;
      data.memo = vm.memo;
      data.requireDateStr = vm.requireDate;
      let url = "repair";
      vm.receiveData.postData(vm, url, data, "res", function() {
        if(vm.res.success) {
             console.log(vm.res.result);
            vm.$router.push({
              name: "submitSuccess",
              query: {
                oId: vm.res.result
              }
            });
        }else {
            alert("失败");
        }
      });
    },
    requestPay() {
      // vm.zzshow=true;
      $("#zzmb").css("display", "block");

      $("#zzmb").css("display", "none");
    },
    //微信初始化
    wxdata() {
      let url1 = "getUrlJsSign";
      vm.receiveData.postData(
        vm,
        url1,
        { url: window.location.href.split("#")[0] },
        "heheData",
        function() {
          let wd = vm.heheData.result;
          wx.config({
            debug: false,
            appId: wd.appId,
            timestamp: wd.timestamp,
            nonceStr: wd.nonceStr,
            signature: wd.signature,
            jsApiList: [
              "chooseImage",
              "previewImage",
              "uploadImage",
              "downloadImage",
              "getLocalImgData"
            ]
          });
        }
      );
    },
    addPic() {
      wx.chooseImage({
        count: 6, // 默认9
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          vm.localIdsid = res.localIds;
          // console.log(localIds);
          alert("已选择" + localIds.length + "张图片");
          var html = "";
          var pic_length = $("[name='pics']").length;

          if (pic_length + localIds.length > 6) {
            alert("所选图片超过6张。");
            return false;
          }
          for (var i = 0; i < localIds.length; i++) {
            var ig = { imgUrl: localIds[i] };
            vm.photos.push(ig);
          }
          var i = 0;
          if (window.__wxjs_is_wkwebview) {
            //ios 环境
            function addimage(i) {
              //  setTimeout(function(){
              wx.getLocalImgData({
                localId: localIds[i],
                success: function(res) {
                  var localData = res.localData;
                  // var addds=res.localData;
                  localData = localData.replace("jgp", "jpeg");
                  html =
                    '<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="' +
                    localData +
                    '" id="' +
                    localIds[i] +
                    '"  style="height:100px;width:90px;"/></div>';
                  $("#pic").append(html);
                  i++;
                  if (i < localIds.length) {
                    // alert(i)
                    addimage(i);
                  }
                },
                fail: function(res) {
                  alert(res);
                }
              });
              //  },100)
            }
            addimage(i);
          } else {
            for (var i = 0; i < localIds.length; i++) {
              html =
                '<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="' +
                localIds[i] +
                '"  id="' +
                localIds[i] +
                '"  style="height:100px;width:90px;"/></div>';
              $("#pic").append(html);
            }
          }
          if (pic_length + localIds.length >= 6) {
            $("#add").hide();
          }
        },
        fail: function(err) {
          alert(err);
        }
      });
    },
    //上传图片到微信
    uploadToWechat() {
      var i = 0;
      var pics = $("[name='pics']");
      function upload() {
        var img = pics.eq(i).find("img");
        var id = img.attr("id");
        setTimeout(function() {
          wx.uploadImage({
            localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              var serverId = res.serverId; // 返回图片的服务器端ID
              vm.uploadPicId += serverId + ",";
              i++;
              if (i < pics.length) {
                upload();
              } else if (i == pics.length) {
                vm.selers();
              }
            }
          });
        }, 50);
      }
      upload();
    }
  },
  computed: {}
};
</script>

<style  scoped>
.repars {
  background: #ffffff;
  margin: 0;
  height: auto;
  overflow: hidden;
}
.zzmb {
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0;
  -moz-opacity: 0.65;
  opacity: 0.65;
  filter: alpha(opacity=65);
  background: #000;
  width: 100%;
  height: 100%;
  display: block;
}
.topLine {
  margin: 15px auto;
  background: #fff8ee;
  line-height: 16px;
  border-top: 1px solid #e5e2dd;
  border-bottom: 1px solid #e5e2dd;
  padding: 10px 15px;
  height: 16px;
  font-size: 16px;
}
.topLineLeft {
  float: left;
  color: #7e6b5a;
}
.topLineRight {
  text-align: right;
  float: right;
  width: 70%;
  overflow: hidden;
  height: 16px;
  color: #ff8a00;
}
.custom-menu {
  display: block;
  margin: 0 15px;
  color: #3b3937;
  line-height: 30px;
  padding: 5px 4px;
  overflow: hidden;
}
.lite-divider {
  border-bottom: 1px solid #d4cfc8;
}
.liteDivider {
  border-bottom: 1px solid #d4cfc8;
}
.address {
  margin-top: 15px;
}
.addr_area {
  background: #f7f7f1;
}
.addrtop {
  height: 5px;
  background-size: 100% 5px;
  background: url("../../assets/images/zhifu/icon_address_top_02.png") repeat-x;
}
.addrbottom {
  background: url("../../assets/images/zhifu/icon_address_bottom_04.png")
    repeat-x;
  height: 5px;
  background-size: 100% 5px;
}
.add_address {
  display: inline-block;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  border: 1px solid #cfa972;
  padding: 4px 30px;
  margin: 20px 0;
  color: #cfa972;
  background-color: white;
  text-decoration: none;
}

.custom-menu-link {
  font-size: 16px;
  background: url("../../assets/images/zhifu/btn_arrow_05_05.png") no-repeat;
  background-size: 10px 12px;
  color: #3b3937;
  background-position: 97% center;
}
.fs15 {
  font-size: 15px;
}
.fs14 {
  font-size: 14px;
}
.sustoma {
  color: #3b3937;
  padding: 15px;
  margin-right: 15px;
  display: inline-block;
}
.addr_location {
  color: #888;
  line-height: 20px;
  margin-top: 6px;
}
.contain {
  background-color: #ffffff;
  padding: 0 14px;
}
.item,
.time,
.order_time {
  width: 100%;
  padding: 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #eeeeee;
}
.orderimg {
    background: url(../../assets/images/zhifu/icon_arrow.png) no-repeat;
    background-size: 8px 12px;
    background-position: right center;
    border-bottom: 5px #eeeeee solid;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.span1 {
  width: 50%;
  font-family: "微软雅黑";
  font-size: 14px;
  color: #666666;
}
.icon4 {
  width: 10px;
  height: 12px;
  float: right;
  margin-top: 3px;
  padding: 1px 0;
}
.custom_menu {
  margin-top: 10px;
  padding: 0 14px;
  background-color: #ffffff;
}
.tip {
  float: right;
  margin-right: 6px;
  font-family: "微软雅黑";
  font-size: 14px;
  color: #666666;
}
.date_pppp {
  position: fixed;
  width: 0px;
  height: 0px;
  color: #fccc;
  z-index: -1;
  top: 200px;
  left: 50px;
  border: 0px;
}
.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  background: #fff;
  border-radius: 5px;
  margin: 200px auto;
  padding: 10px 15px;
  width: 50%;
}
.modal-select {
  line-height: 40px;
}
/*.checked-item {background: url("images/icon_selected.png") no-repeat;
  background-position: right center;background-size: 16px;}*/
.ptb15 {
  padding: 15px 0;
}
.wenti {
  padding: 14px 0;
  font-size: 14px;
  color: #666;
}
.text {
  width: 90%;
  height: 100px;
  background: #F9F9E9;
  padding: 15px;
  border: 1px solid #d4cfc8;
}
.checkedTeam {
  background: url("../../assets/images/repair/icon_selected.png") no-repeat;
  background-position: right center;
  background-size: 16px;
}
.btn-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.btns {
position: relative;
    margin-top: 30px; 
     color: white;
    background: #FF7E00;
    bottom: 4px;
    width: 93%;
    margin-left: 2%;
    text-align: center;
    padding: 4px 0;
    font-size: 18px;
    border-radius: 6px;
    display: block;
}

/* 选择地址 */
.addrlist {
  padding: 10px;
  font-size: 14px;
  background: white;
}
.diz {
  background: #f7f7f1;
}
.dividers {
  border-bottom: 10px solid #f7f7f2;
}
.diz .arrow-margins {
  background-position: 98% center;
}
.address-wraps {
  /* background-position-y: center; */
  padding-bottom: 15px;
}
.menu-links {
  display: block;
  background-size: 7px 12px;
  /* background: url("../../assets/images/zhifu/icon_arrow.png") no-repeat; */
  background-position: right center;
  padding-right: 15px;
}
.section-titles,
.lite-dividers {
  border-bottom: 1px solid #d4cfc8;
  padding-left: 15px;
}
.mt1s {
  margin-top: 30px;
}
.fs14s {
  font-size: 14px;
}
.checkboxs.checkeds {
  background-image: url(../../assets/images/zhifu/icon_selected.png);
}
.checkboxs {
  float: left;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(../../assets/images/zhifu/icon_unselect.png) no-repeat;
  background-size: 16px;
  margin-top: 12px;
}
.locations {
  line-height: 20px;
  margin-top: 6px;
}
.mt2 {
  margin-top: 20px;
}
.tc {
  text-align: center;
}
.section-title,
.lite-divider {
  border-bottom: 1px solid #777777;
  padding-left: 15px;
}
.input-wrap {
  overflow: hidden;
  line-height: 46px;
}
.hidden-input {
  height: 20px;
  margin-top: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: right;
}
.menu-linka {
  background: url(../../assets/images/zhifu/icon_arrow.png) no-repeat;
  padding-right: 15px;

}

.menu-link {
  display: block;
  background-size: 7px 12px;
  background-position: right center;
}
.tc {
  text-align: center;
}
.check {
  color: #f60;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-top: 2px solid #f60;
  background: #fff;
}
.region {
  font-size: 14px;
  width: 32%;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
}
.location-wrap {
  position: relative;
  padding: 0 10px;
  height: 49px;
  line-height: 49px;
  border-bottom: 1px solid #d4cfc8;
}
.location-input-wrap {
  position: relative;
  padding: 5px 10px;
  margin-right: 80px;
  left: 0px;
}
.location-input {
  display: block;
  height: 36px;
  width: 100%;
  outline: none;
  border: 1px solid #d4cfc8;
  border-radius: 4px;
  vertical-align: middle;
  font-size: 15px;
}
.location-btn-cancel {
  position: absolute;
  top: 5px;
  right: 4px;
  display: inline-block;
  height: 36px;
  width: 36px;
  background: url(../../assets/images/zhifu/icon_cancel.png) no-repeat;
  background-size: 15px;
  background-position: center;
}
.location-btn-ensure {
  position: absolute;
  display: block;
  top: 0;
  height: 36px;
  line-height: 36px;
  margin-top: 5px;
  right: 15px;
  color: #3b3937;
  border-radius: 4px;
  font-size: 15px;
  width: 65px;
  text-align: center;
  border: 1px solid #d4cfc8;
}
.location-empty-tip {
  margin: 0 auto;
  margin-top: 105px;
  font-size: 12px;
  color: #888;
  width: 165px;
  text-align: center;
  line-height: 18px;
}
.location-location {
  margin: 0 15px;
  padding: 15px 0;
  border-bottom: 1px solid #d4cfc8;
}
.city,
.city2 {
  font-size: 14px;
  color: #000;
  width: 25%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 5px 0;
}
.city {
  background-color: #fff;
}
.city2 {
  background-color: #e0e0e0;
}
.region {
  font-size: 14px;
  width: 32%;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.btn {
  display: block;
  margin: 15px;
  height: 44px;
  line-height: 44px;
  color: #fff !important;
  font-size: 15px;
  text-align: center;
  background-color: #ff8a00;
  border-radius: 3px;
  outline: none;
  border: none;
  text-decoration: none;
}
.btn-plain {
  display: inline-block;
  padding: 10px 20px;
  height: 27px;
  line-height: 27px;
  color: #3b3937;
  border-radius: 3px;
  color:black;
  border: 1px solid #777777;;
}
.mainlian {
  color: #FF7E00;
  border: 1px solid #FF7E00;
  padding: 4px 8px;
  border-radius: 2px;
}

/* 选择地区2 */
.reion-info {
  width: 70%;
  float: right;
  overflow: hidden;
  font-size: 15px;
}
.reionspan {
  width: 31%;
  display: inline-block;
  text-align: right;
}
.w-modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.w-modal {
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin: 20% auto;
  padding: 10px 15px;
  overflow: scroll;
  width: 60%;
  max-height: 80%;
}
.w-lite-divider {
  border-bottom: 1px solid #d4cfc8;
}
.w-option {
  background-image: url(../../assets/images/zhifu/icon_select.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px;
  padding: 15px 0 15px 25px;
}
.WCheckedItem {
  background-image: url(../../assets/images/zhifu/icon_selectted.png);
}
.xiaoqu_title {
  font-size: 18px;
  padding: 6px;
}
.xiaoqu_list {
  width: 100%;
  overflow: scroll;
  position: fixed;
  top: 50px;
  bottom: 80px;
}
.xiaoqu_item {
  width: 80%;
  margin-left: 10%;
  border: 1px #777777 solid;
  text-align: center;
  padding: 4px 0;
  margin-top: 10px;
}
.xiaoqu_item.current {
  border: 1px #ff3e00 solid;
}
.xiaoqu_btn {
  position: fixed;
  color: white;
  background: #ff7e00;
  bottom: 4px;
  width: 93%;
  margin-left: 2%;
  text-align: center;
  padding: 4px 0;
  font-size: 18px;
  border-radius: 6px;
}
.photo_area {
  font-size: 15px;
  color: #7e6b5a;
  padding-left: 15px;
  background-color: #fff;
}
/* .photo_wrap {
  width: 33%;
  text-align: center;
  display: inline-block;
} */
.pic_frame {
  width: 94%;
  /* margin: 0px 0% 0px 6%; */
}
.addicon {
  background: url("../../assets/images/zhifu/add_photo.png") no-repeat;
  background-size: 40px;
  background-position: 50%;
}
.photo {
  /* margin: 3px; */
  width: 90px;
  height: 104px;
  outline: #e5e2dd solid 1px;
}
.photo_wrap {
  /* width: 90px; */
  text-align: center;
  display: inline-block;
}

</style>