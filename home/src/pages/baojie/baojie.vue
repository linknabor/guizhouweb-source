<template>
   <div class="baojies">
       <div class="banner">
            <swiper v-if="banners.length>0" :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(banner,index) in banners"  :key="index">
                    <div class="ban1">
                        <a :href="banner.bannerUrl">
                            <img :src="banner.picture" alt="tt" >
                        </a>                    
                    </div> 
                </swiper-slide>
                     <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
       </div>
       <div class="contain">
           <router-link to="/rchang" >
               <img src="../../assets/images/baojie/ri.png" class="icon"/>
            </router-link>
			    <img src="../../assets/images/baojie/shen.png" class="icon" @click="prompts"/>
			    <img src="../../assets/images/baojie/xing.png" class="icon" @click="prompts"/>
             <!-- 支付订单单独提出    -->
			<a :href='this.config.home_baojie.url1'>
                <img src="../../assets/images/baojie/order.png" class="icon"/>
            </a>
       </div>
       	<div class="notice" v-show="prompt">
			<div class="notice_text">
				该服务暂未开通，敬请期待！
			</div>
			<div class="notice_btn" @click="prompth">我知道了</div>
		</div>
   </div>
</template>

<script>
let vm;
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
   data () {
       return {
            swiperOption:{
                notNextTick:true,
                // autoplay:false,
                autoplay:{
                disableOnInteraction:false,
                delay:3000
                },
                pagination: {
                el: '.swiper-pagination'
                },
                loop: true,
            },
            banners:[],
            prompt:false,
       };
   },
   created() {
       vm=this;
   },
   mounted() {
       this.common.checkRegisterStatus();
       vm.query();
   },
   methods: {
       
    query() {
        let url="/banner/12";
        vm.receiveData.getData(vm,url,'res',function(){
            vm.banners=vm.res.result;
        })
    },
    prompts() {
        vm.prompt=true;
    },
    prompth() {
        vm.prompt=false;
    }
   },
    components: {
        swiper,
        swiperSlide
   },
   computed: {
        swiper(){
               return this.$refs.mySwiper.SWIPER
            }
   },
}
</script>
<style>
    .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
</style>

<style  scoped>
.baojies {
    background-color:#fff;
}
.ban1{width:100%;}
.ban1 img{width: 100%;height:165.6px}
.banner{
    width: 100%;
    margin: 0px auto;
    position: relative;
}
.contain{
    box-sizing: border-box;
    overflow: hidden;
    margin-top: -4px;
}
.icon{
    width: 50%;
    box-sizing: border-box;
    float:left;
}
.notice{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
}
.notice_text{
    text-align: center;
    margin-top: 50%;
    background-color: #EEEEEE;
    width: 60%;
    margin-left: 20%;
    border-radius: 6px 6px 0 0;
    font-family: "微软雅黑";
    font-size: 14px;
    line-height: 40px;
}
.notice_btn{
    text-align: center;
    background-color: #D7D7D7;
    width: 60%;
    margin-left: 20%;
    border-radius: 0 0 6px 6px;
    font-family: "微软雅黑";
    font-size: 14px;
    line-height: 40px;
}
</style>