<style scoped>
.wuye{font-family: PingFangSC-Regular;width: 100%;
  margin-bottom: 60px;
/* height: 800px; */
      background-color:#ccc;font-size: 14px;
     }
a{color: #000;opacity: 0.7;}
.ban1{width: 100%;}
.ban1 img{width: 100%;}
.jiugongge{width: 100%;height: 208px;background-color: white;}
.jgg_li{float: left;width: 33%;height: 104px; text-align: center;letter-spacing: 1.31px;font-size: 16px;font-family:PingFangSC-Regular;}
.jgg_img{margin: 15px auto 3px;}
.jgg_img img{width: 54px;}
.jgg-span{color: black;}

/* 资讯 */
.inner{
width: 100%;
/* height: 350px; */
overflow: hidden; background-color: white;}
.section3_divider{
    border-bottom: 1px solid #e5e2dd;
} 
.tabmain {
    border-bottom: 1px solid #d4cfc8;
    height: 46px;
}
.tab {
    height: 46px;
    width: 100%;
    overflow: auto;
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    /* box-sizing: border-box; */
}
.tabscon {
    width: 100%;
    position: absolute;
}
.notice-tab-title {
    display: inline-block;
    width: 25%;
    /* color: #dd9c4d; */
    color: #000;
    font-size: 14px;
    text-align: center;
    /* padding: 15px 0; */
    height: 45px;
    line-height: 45px;
    transition: all 1s ;
    -webkit-transition: all 1s;
} 
.tab .notice-tab-title.active {
    color: #47B3FF;
    /* border-color: #47B3FF; */
    border-bottom: 1px solid #47B3FF;
}  
 .tabadd {
     text-align: left;
     transition: all 1s;
     -webkit-transition: all 1s;
 }
   
.tab::-webkit-scrollbar {
        display: none;
    }
.section3_notice{
    margin: 15px 0px 15px 4%;
    font-size: 15px;
    color: #000000;
    text-align: left
}
.section3_divider{
    border-bottom: 1px solid #e5e2dd;
}    

 .section3_zixuns{
    /* padding: 10px 0px 10px 4%; */
    height: 105px;
    border-bottom: 1px solid #d4cfc8;
}
.section3_sub_main_left{
    height: 105px;
    float: left;
}
        
.section3_sub_main_right{
    height: 105px;
    float: left;
    width: 60%;
    margin-left: 6%;
    text-align:left;
}  
.section3_sub_img{
    width: 100px;
    height: 75px;
    margin: 15px 0px 15px 0px;
    float: left;
}
 .section3_sub_title{

    /* height: 16px; */
    margin: 16px 0px 0px 0px;
    font-size: 15px;
    color: #000000;
    letter-spacing: 1.14px;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
        /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    overflow: hidden;   
}
.section3_sub_content{    
    /* height: 59px; */
    margin: 5px 0px 0px 0px;
    font-size: 13px;
    color: #a1a1a1;
    line-height: 20px;
    letter-spacing: 1.14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
        /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    overflow: hidden;
}
.avatar-wraps {
    overflow: hidden;
    position: relative;
    padding: 1px;
    height: 5rem;
    text-align: center;
    }
.center-bgs {
    height: 7rem;
    text-align: center;
    background-image: url('../assets/images/pay/bg_publishs.jpg');
    background-size: cover;
    background-position: 50%;
} 
</style>
<template>
<div id="divwuye" @scroll="getscroll">
	<div  class="wuye">
		<div>
		<div style="background-color:#ccc">
		<swiper :options="swiperOption" ref="mySwiper" v-if="banners.length>0">
           	 <swiper-slide v-for="item in banners" :key="item.id">
                <div class="ban1">
                    <a :href="item.bannerUrl">
						<img :src="item.picture" alt="">
                    </a>                  
                </div> 
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div>        -->
       	</swiper>
		   
		</div>
		    <div class="jiugongge">
	            <ul>
	                <li class="jgg_li" >
	                    <router-link to="/pay">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/wyjf1.png" alt="">
	                        </div>
	                        <span class="jgg-span">物业缴费</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >    
	                    <!-- <router-link to="/parkFees"> -->
						<div  @click="gotopay">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/tcjf1.png" alt="">
	                        </div>
	                        <span class="jgg-span">停车缴费</span>
						</div>	
	                    <!-- </router-link> -->
	                </li>
	                <li class="jgg_li" >
	                    <router-link to="/payEnquiry">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/jfcx1.png" alt="">
	                        </div>
	                        <span class="jgg-span">缴费查询</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >
	                    <router-link to="/myHouse">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/wsyz1.png" alt="">
	                        </div>
	                        <span class="jgg-span">我是业主</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >
	                    <div @click="gotobutler">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/yzyj1.png" alt="">
	                        </div>
	                        <span class="jgg-span">意见投诉</span>
	                    </div>
	                </li>
	                <li class="jgg_li" >
						<div @click="gotoThread">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/bmwx1.png" alt="">
	                        </div>
	                        <span class="jgg-span">在线报修</span>
						</div>	
	                </li>
	            </ul>
	        </div>
	        <div style=" width: 100%; height: 7px;background-color:#ccc"></div> 
	     	<div class="inner">
				<div class="section3_divider"></div>
				<div class="tabmain">
					<div class="tab" ref="tabs" >
						<div ref="tabcon" class="tabscon">
							<div  ref="tabtitle" class="notice-tab-title" v-for="(tab,index) in tabs"  :key="index" :class="{active:tab.active,tabadd:tab.ali}" @click="changeTab(index,tab.type)">{{tab.name}}</div>
						</div>
					</div>
				</div> 	
				<div id="word">
					<div class="section3_zixuns" v-for="zixun in zixuns1" @click="jumpToDetail(zixun.id)" :key="zixun.id">
							<div class="section3_sub_main_left">
							<img class="section3_sub_img" :src="zixun.smallImage"/>
							</div>
						
							<div class="section3_sub_main_right">
								<div class="section3_sub_title">{{zixun.title}}</div>
								<div class="section3_sub_content">{{zixun.summary}}</div>
							</div>
					</div>
					<div class="avatar-wraps " v-show="zixuns1.length == 0">
						<div class="center-bgs" ></div>
					</div>
				</div>
	     	</div>		 
		</div>
		<foot></foot>
	</div>
</div>
</template>
<script>
	let vm;
	let isloadPage=false;
	import foot from '../components/footer.vue';
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import '../../node_modules/swiper/dist/css/swiper.css'
	import BScroll from 'better-scroll';
	export default {
		components:{
			swiper,
		swiperSlide,
			foot,
		},
		data(){
			return {
				banners:[],
				zixuns1:[],
				page : 0,
				cfgParam:{},
				sectId:0,
				messtype:'',
				swiperOption:{
						notNextTick:true,
						// autoplay:false,
						autoplay:{
							disableOnInteraction:false,
							delay:3000
						},
						pagination: {
							el:'.swiper-pagination'
						},
						loop: true,
				},
				tabs: [
					{
						name: '社区生活',
						type: 9,
						active:true  
					}
				],
			}
		},
		created(){
			vm=this;
		},
		watch:{
			
		},
		mounted(){
			// vm.initSession4Test();
			vm.queryUserInfo();
	  		vm.bannerss();
		},
		updated() {
          vm.$nextTick(()=> {
            // setTimeout(() => {
                vm.personScroll();
            // },2000)
		})
		},
		methods:{
			//模仿线上用户信息
			//105/747/384
		  	initSession4Test(){
		  		let _this = this;	
				let url = '/initSession4Test/47886';
				_this.receiveData.getData(_this,url,'Data',function(){
				});
			},
			//轮播图
			bannerss(){
				let _this = this;
				let url = 'banner/3';
				_this.receiveData.getData(_this,url,'Data',function(){
					vm.banners = vm.Data.result;
				});
			},

		queryUserInfo() {
			let n = "GET",
                a = "userInfo",
                i = null,
                e = function(n) {
                    if(n.result!=null) {
                        vm.cfgParam=n.result.cfgParam;
                        vm.sectId=n.result.sectId;
                    }
                    if(n.success&&n.result==null) {
                         reLogin();
                    }
                 vm.query(); 
                },
                r = function() { 
                   vm.query(); 
				};
			vm.common.invokeApi(n, a, i, null, e, r);
		},
		// 停车
		gotopay() {
			alert("内容正在丰富中,敬请期待。");
		},
		//意见
		gotobutler() {
			if(vm.sectId==0 || vm.sectId== null)
        	{
        		alert("您暂未绑定房屋，请前往“我是业主”\r\n进行操作，感谢！");
        		return;
        	}else  if(vm.cfgParam==null || vm.cfgParam.ONLINE_SUGGESTION == undefined||vm.cfgParam.ONLINE_SUGGESTION==0) {
                alert("当前所在的小区未开启当前业务");
                return  
            } else {
             	vm.$router.push({path:'/mysteward'})
            }
		},
		// 报修
		gotoThread() {
			if(vm.sectId==0|| vm.sectId== null)
            {
                alert("您暂未绑定房屋，请前往“我是业主”\r\n进行操作，感谢！");
                return;
            }else  if(vm.cfgParam==null || vm.cfgParam.ONLINE_REPAIR == undefined||vm.cfgParam.ONLINE_REPAIR==0) {
                alert("当前所在的小区未开启当前业务");
                return   
            }else {
             	vm.$router.push({path:'/repair',query:{'projectId':'1'}})
            }
		},
		query() {
		if(vm.cfgParam.ONLINE_MESSAGE==1) {
				vm.tabs=[ 
					{
						name: '社区生活',
						type: 9,
						active:true  
					},
					{
						name: '物业公告',
						type: 0 ,
						active:false
					},
					{
						name: '业委会公告',
						type: 1,
						active:false 
					},
					{
						name: '居委会公告',
						type: 2,
						active:false,
						ali:true
					},
					
				]
		}
		vm.message(vm.tabs[0].type) 
		},
		 //左右滑动
       personScroll() {
		if(vm.tabs.length>1) {
			vm.$refs.tabcon.style.width= 33 *vm.tabs.length+'%';
		}
		vm.$nextTick(() => {
			if (!vm.scroll) {
				vm.listScroll  = new BScroll(vm.$refs.tabs, {
					startX:0,
					// click: true,
					scrollX: true,//
					scrollY: false,
					useTransition:false,
					eventPassthrough: "vertical"
				});               
			} else {
				vm.scroll.refresh();
			}

			vm.listScroll.on('scrollStart', (pos) => {
			$('.tabadd').css({'text-align':'center'})
			})
		
			vm.listScroll.on('scrollEnd', (pos) => {
				var add =Math.abs(pos.x);
			if(add==0) {
				$('.tabadd').css({'text-align':'left'})
			}
			})
		})
                
       },
		 //点击切换资讯
        changeTab(index,type) {
            for(var i=0; i<vm.tabs.length;i++) {
                vm.tabs[i].active = false;
            }
             vm.tabs[index].active = true;
            vm.message(type) 
        },
		message(type){
            vm.page=0;
            vm.messtype=type;
            let n = "GET",
                a = "messages/"+type+"/"+vm.page,
                i = null,
                e = function(n){
                    if(n.result) {
                        vm.zixuns1=n.result;                     
                        vm.page++;
                    }
                    
                },
                r = function(){
                    
                };
            this.common.invokeApi(n,a,i,null,e,r);
		},

		jumpToDetail(mid) {
 			if(mid==29){
    		   window.location.href="https://mp.weixin.qq.com/s/3N-yinJvq0jDJmh6fd6scw";
    	   }else if(mid==30){
    		   window.location.href="https://mp.weixin.qq.com/s/WTgWmG5lknKExBmOsughmQ";
    	   }else if(mid==31){
    		   window.location.href="https://mp.weixin.qq.com/s/-6gMOUi3vWJMRraOqtC2wQ";
		   }else if(mid==76){
			   window.location.href="http://mp.weixin.qq.com/s/LoJjEaaQ0xhi2wD7uuJVJQ";	
		   }else if(mid==78){
			   window.location.href="http://mp.weixin.qq.com/s/28gpc3gW7byK6k3kQHqX8A";
		   }else if(mid==79){
			   window.location.href="http://mp.weixin.qq.com/s/Em3EJ6lo4V8eITXpPcA3LQ";
		   }else if(mid==86){
			   window.location.href="http://m.eqxiu.com/s/kg2hoy34?from=singlemessage&isappinstalled=0";
		   }else if(mid==110){
			   window.location.href="http://mp.weixin.qq.com/s/4Ool8tH0lvij5PE8j14QMA";
		   }else if(mid==112){
			   window.location.href="http://mp.weixin.qq.com/s/gQGtpj_taPUXddQNh_EJWA";
		   }else if(mid==189){
			   window.location.href="http://mp.weixin.qq.com/s/8hjgD4eu7fhQHx8mKK9TRA";
		   }else if(mid==190){
			   window.location.href="http://mp.weixin.qq.com/s/L6OoaaJmRD72NHsUtRdqig";
       	   }else if(mid==197){
			   window.location.href="https://mp.weixin.qq.com/s/X34PcEoCP-GizVczTC73nA";
		   }else if(mid==198){
			   window.location.href="https://mp.weixin.qq.com/s/JEE5Yyx5ugzF8-WzrkVF4g";
		   }else if(mid==225){
			   window.location.href="https://mp.weixin.qq.com/s/f-N1W8U1Q3Py-vTC_TjR6Q";
		   }else{
				this.$router.push({
					path:'/news',
					query:{
						messageId:mid
					}
				})
		    }
		},
		 //分页
		getscroll(e) {
			var st = e.srcElement.scrollTop;
			var ad=window.innerHeight
			var hd=$('#word').height();
			if( st+ad >=hd && !isloadPage) {
				isloadPage=true;
				vm.loadNextPage();
			}
		},
		loadNextPage() {
          vm.receiveData.getData(vm,"messages/"+vm.messtype+"/"+vm.page,'Data',function(){
                 if(vm.Data.success) {
                     if(vm.Data.result.length>0) {
                        vm.zixuns1=vm.zixuns1.concat(vm.Data.result);
                        isloadPage=false;
                        vm.page++
                     }
                 }
            });
       }
		}
	}
</script>