<style scoped>
.repair {
  font-family: PingFangSC-Regular;
  width: 100%;
  height: 100%;
  background-color: #e5e2dd;
  font-size: 14px;
  text-align: center;
}
.addreapir {
  background-color:#F9F9E9;
  position: absolute;
  width:100%;
  height: 100%; 
}
.reapir {
    background: #F9F9E9;
    margin: 0;
    height: auto;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.outter {
  float: left;
  background: #f9f9e9;
  width: 50%;
}
.inner {
  background: #fff;
  border: 1px solid #e5e2dd;
  border-radius: 3px;
  text-align: center;
  margin: 0px 6px;
}
.inner_icon {
  display: block;
  width: 100%;
  padding-top: 15%;
  height: 70px;
}
.inner-title {
  padding-top: 10px;
  font-size: 15px;
  color: #000;
}
.icon1 {
  background: url("../../assets/images/repair/icon_btn_yushiweixiu_03.png")
    no-repeat;
}
.icon2 {
  background: url("../../assets/images/repair/icon_btn_chufangweixiu_03.png")
    no-repeat;
}
.icon3 {
  background: url("../../assets/images/repair/icon_btn_ketingweixiu_03.png")
    no-repeat;
}
.icon4 {
  background: url("../../assets/images/repair/icon_btn_qiangruodianweixiu_03.png")
    no-repeat;
}
.icon5 {
  background: url("../../assets/images/repair/icon_btn_menchuanweixiu_03.png")
    no-repeat;
}
.icon6 {
  background: url("../../assets/images/repair/icon_btn_jiadianweixiu_03.png")
    no-repeat;
}

@media screen and (min-width: 320px) {
  .inner.half_height {
    height: 148px;
  }
  .outter.half_height {
    height: 160px;
  }
  .icon6,
  .icon5,
  .icon4,
  .icon3,
  .icon2,
  .icon1.bgsize {
    background-size: 70px;
    background-position: 50%;
  }
}
@media screen and (min-width: 480px) {
  .inner.half_height {
    height: 228px;
  }
  .outter.half_height {
    height: 240px;
  }
  .icon6,
  .icon5,
  .icon4,
  .icon3,
  .icon2,
  .icon1.bgsize {
    background-size: 100px;
    background-position: 50%;
  }
}
@media screen and (min-width: 640px) {
  .inner.half_height {
    height: 308px;
  }
  .outter.half_height {
    height: 320px;
  }
  .icon6,
  .icon5,
  .icon4,
  .icon3,
  .icon2,
  .icon1.bgsize {
    background-size: 140px;
    background-position: 50%;
  }
}
@media screen and (min-width: 750px) {
  .inner.half_height {
    height: 353px;
  }
  .outter.half_height {
    height: 375px;
  }
  .icon6,
  .icon5,
  .icon4,
  .icon3,
  .icon2,
  .icon1.bgsize {
    background-size: 200px;
    background-position: 50%;
  }
}
</style>
<template>
<div class="addreapir">
  <div class="reapir">
    <div class="banner">
      <img src="../../assets/images/repair/banner.jpg" alt>
    </div>
    <div style="padding-top:10px;overflow: hidden;" >
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(1)">
          <i class="inner_icon icon1 bgsize"></i>
          <div class="inner-title">浴室维修</div>
        </div>
      </div>
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(2)">
          <i class="inner_icon icon2 bgsize"></i>
          <div class="inner-title">厨房维修</div>
        </div>
      </div>
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(3)">
          <i class="inner_icon icon3 bgsize"></i>
          <div class="inner-title">客厅卧室维修</div>
        </div>
      </div>
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(4)">
          <i class="inner_icon icon4 bgsize"></i>
          <div class="inner-title">强弱电维修</div>
        </div>
      </div>
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(5)">
          <i class="inner_icon icon5 bgsize"></i>
          <div class="inner-title">门窗维修</div>
        </div>
      </div>
      <div class="outter half_height">
        <div class="inner half_height" @click="gotoProject(6)">
          <i class="inner_icon icon6 bgsize"></i>
          <div class="inner-title">家电维修</div>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    //刷新页面
  },
  created() {},
  watch: {},
  mounted() {
    this.query();
    // this.nitTest();
  },
  methods: {
    gotoProject(ele) {
      this.$router.push({
        name: "chooseRepair",
        query: {
          category: ele
        }
      });
    },
    nitTest() {
      let url1 = "/initSession4Test/105";
      this.receiveData.getData(this, url1, "data1", function() {});
    },
    query() {
      let n = "GET",
        a = "userInfo",
        i = null,
        e = function(n) {
          console.log(JSON.stringify(n));
        },
        r = function() {};
      this.common.invokeApi(n, a, i, null, e, r);
      // this.common.initWechat(["onMenuShareTimeline", "onMenuShareAppMessage"]);
    }
  }
};
</script>