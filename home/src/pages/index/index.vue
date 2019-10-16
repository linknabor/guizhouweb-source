<template>
   <div class="wuye">
       <!-- 轮播图 -->
         <swiper v-if="banners.length>0" :options="swiperOption" ref="mySwiper">
            <swiper-slide  v-for="(banner,i) in banners"  :key="i">
                <div class="ban1" >
                    <a :href="banner.bannerUrl">
                        <img :src="banner.picture" alt="tt">
                    </a>                  
                </div> 
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div>        -->
        </swiper>
        <!-- 领取红包按钮 20160725 -->
        <!-- <div style="width: 100%;" @click="gotoPage('https://www.e-shequ.com/guizhou/weixin/person.html?#/coupons');">
            <div style="position:relative ;margin: 10px;">
                 <img width="100%" src="http://img.e-shequ.com/FpNWh-CCfDsI6J96WNZHhfoZJgzm">
            </div>
        </div> -->
        <div class="main">
            <div  v-for="item in jingxuans" class="featured" @click="gotoPage(item.url)">
		    	<img :src="item.image" />
	    	</div>
        </div>
   </div>
</template>

<script>
let vm;
import { MessageBox } from 'mint-ui';
import {swiper,swiperSlide} from 'vue-awesome-swiper';

export default {
   data () {
       return {
             swiperOption:{
                notNextTick:true,
                autoplay: {
                    disableOnInteraction:true,
                    delay:3000
                },
                pagination: {
                el: '.swiper-pagination'
                },
                loop: true,
            },
            jingxuans:[],
            banners:[],
       };
   },
   created() {
       vm=this;

   },
   mounted() {
        // let url1 = '/initSession4Test/105';
        // vm.receiveData.getData(vm,url1,'data1',function(){
            
        // })
    // console.log(vm.config.url)

    vm.query();
    vm.getBannerType()
   },
   methods: {
       query(){
           let n = "GET",
            a = "userInfo",
            i = null,
            e = function(n) {
            console.log(JSON.stringify(n));
            if(n.success&&n.result==null) {
					reLogin();
				}
            ;

            },
            r = function() {     
            };
            this.common.invokeApi(n, a, i, null, e, r);
        },
        getBannerType() {
                var n = "GET",
                a = "pageconfig/daojia",
                i = null,
                e = function(n) {
                    vm.banners = n.result.banners;
                    vm.jingxuans=n.result.jingxuans;
                },
                r = function() {
                    alert("页面获取信息错误，请稍后重试");
                };
            this.common.invokeApi(n, a, i, null, e, r)
        },
        gotoPage(url) {
            location.href=url;
        }
  
   },

   components: {
        swiper,
        swiperSlide
   },

   computed: {},
}
</script>

<style  scoped>
.wuye{font-family: '微软雅黑';width: 100%;background: #f2f2f2;height: 100%;}
.ban1{width: 100%;}
.ban1 img{width: 100%; 
/* opacity: 0.7; */
}
 .main{       
        margin: 5px;
            overflow: hidden;
    
    } 
.featured {
    width: 48%;
    float: left;
    margin: 1%;
}
.featured  img {
    border-radius: 6px;
}




</style>