<template>
<div id="divwuye"  @scroll="getscroll">
	<div class="main">
		<!-- 加载中 -->
		<div id="phoneErro"></div>
		<!-- class="hidden" -->
		<div id="phoneAjax" v-show="showp"> 
			<img src="../../assets/images/house/c3d7f369-4a5e-4c4a-9fb9-a4b9d274c7e1.gif" style="width:40px;height:40px;vertical-align: middle;">
		</div>

		<mt-navbar id="navBar"  v-model="selected">
	    	
	    	<!--  -->
			<mt-tab-item id="a">查询缴费</mt-tab-item>
	    	<mt-tab-item id="b">物业缴费</mt-tab-item>
			<mt-tab-item id="d">账单缴费</mt-tab-item>
			
	    	
	    	
	    </mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="d">
		  	<!-- 账单缴费开始-->
		    <div class="lite-divider">
	            <input placeholder="输入账单号可快速缴费" class="hidden-input" style="text-align:left;" v-model="stmtId">
	            <div class="scan-icon" @click="show"></div>
	        </div>
			<mt-button class="subBtn" size="large" @click.native="submit" >提交</mt-button>
			<!-- <mt-loadmore 
			  	:bottomMethod="quickloadBottom" 
			  	:auto-fill = "false"
			  	:bottomAllLoaded = "quickisLastPage"
				ref="loadmore1"
				@bottom-status-change="handleBottomChange"
			  	> -->
				  <div id="word">
			  		<Bill :bill-info="quickBillInfo" :version="version" @itemClick="itemClick"></Bill>
				<!-- <div slot="bottom" class="mint-loadmore-bottom"> -->
					<!-- :class="{ 'is-rotate ': bottomStatus === 'drop' }" -->
					<!-- <span v-show="bottomStatus !== 'loading'" >上拉加载</span>
					<span v-show="bottomStatus === 'loading'">
						<mt-spinner type="snake"></mt-spinner>
					</span> -->
				</div>

			<!-- </mt-loadmore> -->
			<div style="width:100%;height:0.92rem;"></div>
			<div class="btn-fixed">
	    		<div class="fl select-btn"  v-show="quan1"  :class="{allSelected:quickAllselect}" @click="allSelect(quickBillInfo,'quickAllselect')">全选&nbsp;</div>
	    		<div class="pay" @click="pay('quickBillInfo','quickAllPrice','quickAllselect')">
	    			我要缴费
	    			<span>
	    				￥{{quickAllPrice}}
	    			</span>
	    		</div>
    		</div> 	  
			<!-- 账单缴费结束 -->
		  </mt-tab-container-item>
		  <mt-tab-container-item id="b">
			<!-- 物业缴费开始 -->
		    	<!-- <mt-loadmore 
			  	:bottomMethod="loadBottom" 
			  	:auto-fill = "false"
			  	:bottomAllLoaded = "bisLastPage"
				ref="loadmore2"
				@bottom-status-change="handleBottomChange"
			  	> -->
				  <div id="word">
			  		<Bill :bill-info="billInfo" :version="version" @itemClick="itemClick"></Bill>

				<!-- <div slot="bottom" class="mint-loadmore-bottom"> -->
					<!-- :class="{ 'is-rotate ': bottomStatus === 'drop' }" -->
					<!-- <span v-show="bottomStatus !== 'loading'" >上拉加载</span>
					<span v-show="bottomStatus === 'loading'">
						<mt-spinner type="snake"></mt-spinner>
					</span> -->
				</div>	  

			 	<!-- </mt-loadmore> -->
				 
            <!-- <mt-spinner type="snake"></mt-spinner> -->

			 	<div style="width:100%;height:0.92rem;"></div>
		    	<div class="btn-fixed">
		    		<div class="fl select-btn" v-show="quan2" :class="{allSelected:bAllSelect }" @click="allSelect(billInfo,'bAllSelect')">全选&nbsp;</div>
		    		<div class="pay" @click="pay('billInfo','allPrice','bAllSelect')">
		    			我要缴费
		    			<span>
		    				￥{{allPrice}}
		    			</span>
		    		</div>
        		</div> 
		    <!-- 物业缴费结束 -->
		  </mt-tab-container-item>

		  <!-- 查询缴费开始 -->
		  <mt-tab-container-item id="a">
		  	
		  	<div class="query-data">
		  		<div class="input-row">
			  		<label>户号：</label>
					  <input type="text" id="btnd" class="virtual-input classinput" value=""  placeholder="请输入户号" v-model="huhao" @change="huhaoserach()">
					  	<!-- <i class="iconfont icon-chacha  classc" @click="clicki" v-show="showi"></i> -->
			  	</div>
				   <!-- 判断是否为无账单显示 -->
            <div class="input-row" v-if="standard1">
                 <label>起始日期：</label>
            <input class="virtual-input classinput" type="date" value="" v-model="startData" >
          </div>
          
          <div class="input-row" v-if="standard3">
             <label>起始日期：</label>
            <div class="virtual-input classinput" type="date">{{startData | moment("YYYY/MM/DD")}}</div>
          
          </div>
          <div class="input-row" v-if="standard2">
            <label>结束日期：</label>
            <input class="virtual-input classinput" type="date" value="" v-model="endData" @change="specifiName()">
              
          </div>
        

			  
		  	</div>
		  	<!-- <mt-loadmore 
			  	:bottomMethod="queryLoadBottom" 
			  	:bottomAllLoaded = "queryisLastPage"
			  	:auto-fill = "false"
				ref="loadmore"
				@bottom-status-change="handleBottomChange"
			> -->
			<div id="word">
			  	<Bill :bill-info="queryBillInfo" @itemClick="itemClick" :version="version" :other-billinfo="otherbillinfo"></Bill>

				<!-- <div slot="bottom" class="mint-loadmore-bottom">
					<span v-show="bottomStatus !== 'loading'" >上拉加载</span>
					<span v-show="bottomStatus === 'loading'">
						<mt-spinner type="snake"></mt-spinner>
					</span> -->
				</div>

			<!-- </mt-loadmore> -->
			<div style="widtt:100%;height:0.92rem;"></div>
			<div class="btn-fixed" id="st" v-show="showt">
	    		<div  class="fl select-btn" v-show="quan3"  :class="{allSelected:queryAllselect }" @click="allSelect(queryBillInfo,'queryAllselect')">全选&nbsp;</div>
	    		<div class="pay" @click="pay('queryBillInfo','queryAllPrice','queryAllselect','otherbillinfo','queryAllPrice1')">
	    			<span>我要缴费</span>
	    			
	    				<span v-if="zhuanpay=='zhuanye'" >￥{{queryAllPrice}}</span>
                        <span v-if="zhuanpay=='biaozhun'">￥{{queryAllPrice1}}</span>
	    			
	    		</div>
       		</div>
		  	
		  </mt-tab-container-item>
		</mt-tab-container>
		</div>
		 <div  v-show="isshow"
      style=" background: rgba(0,0,0,0.5);display: none;width: 100%;height: 100%;top: 0rem; position: absolute;"></div>
	</div>
	
</template>
<script>
	let vm;
	let timer,startData,endData;
	let isloadPage=false;
	import wx from 'weixin-js-sdk';
	import '../../assets/js/tap.js'
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	import Bill from '../../components/bill.vue';
	import { Loadmore} from 'mint-ui';
	import { Spinner } from 'mint-ui';
	import moment from "../filter/datafromat";

	
	export default {
	  components:{Bill},
	
	  computed:{
	  	//物业缴费总价
	  	allPrice : function(){
	  		let ap = 0;
	  		for(let i in this.billInfo){
	  			if(this.billInfo[i].selected == true ){
	  				ap+=Number(this.billInfo[i].fee_price)
	  			}
	  		}
	  		return parseFloat(ap).toFixed(2)
	  	},
	  	//停车缴费总价
	  	carAllPrice : function(){
	  		let ap = 0;
	  		for(let i in this.carBillInfo){
	  			if(this.carBillInfo[i].selected == true){
	  				ap+=Number(this.carBillInfo[i].fee_price)
	  			}
	  		}
	  		return parseFloat(ap).toFixed(2)
	    },
	    //快捷缴费总价
	    quickAllPrice : function(){
	    	let ap = 0;
	  		for(let i in this.quickBillInfo){
	  			if(this.quickBillInfo[i].selected == true && this.quickBillInfo[i].pay_status=="02"){
	  				ap+=Number(this.quickBillInfo[i].fee_price)
	  			}
	  		}
	  		return parseFloat(ap).toFixed(2)
	    },
	    //查询缴费总价
	    queryAllPrice :function(){
	    	let ap = 0;
	  		for(let i in this.queryBillInfo){
	  			if(this.queryBillInfo[i].selected == true){
	  				ap+=Number(this.queryBillInfo[i].fee_price)
	  			}
	  		}
	  		return parseFloat(ap).toFixed(2)
		},
		//无账单缴费
    queryAllPrice1: function() {
      let ap = 0;
      for (let i in this.otherbillinfo) {
        if (this.otherbillinfo[i].selected == true) {
          ap += Number(this.otherbillinfo[i].fee_price);
        }
      }
      return parseFloat(ap).toFixed(2);
    }
	  },
	 
	  data(){
	  	return {
			  	isshow:false,
			    standard1: false,
				standard2: false,
				standard3: false,
				startData: "",
				endData: "",
				zhuanpay: "zhuanye",
				version: "02",
				getversion: "02",
	  		query:{//查询缴费数据
	  			sect:'',//小区
				sectID:'',//小区id
	  			build:'',//楼宇id
	  			unit:'',//门牌id
	  			house:'',//室号id
	  		},
            huhao:'',//户号
			mng_cell_id:'',
	  		stmtId:'',//快捷缴费 扫描出来的账单号
	  		url : '/billList',
	  		params : {
	  			startDate:'',
	  			endDate:'',
	  			payStatus: '02', //写死
	  			currentPage : 1, //页码
	  			totalCount : 0, //第几条开始
	  		},
	  		bisLastPage:false,//物业缴费是否为最后一页
	  		carisLastPage:false,//停车缴费是否最后一页
	  		quickisLastPage:false,//快捷缴费是否为最后一页
	  		queryisLastPage:false,//查询缴费是否为最后一页
	  		bAllSelect:false,//物业缴费全选
	  		carAllselect:false,//停车缴费全选
	  		quickAllselect:false,//快速缴费全选
	  		queryAllselect:false,//查询缴费全选
	  		billInfo:[],//物业缴费数据
	  		carBillInfo:[],//停车缴费数据
	  		queryBillInfo : [],//查询缴费数据
			quickBillInfo:[],//快捷查询数据
			  otherbillinfo: [], //无账单缴费
	  		selected:'a', //选项卡 默认选中
	  		billPage :1, // 物业缴费页码
	  		carBillPage :1, //停车缴费页码
	  		queryBillPage : 1,//查询缴费页码
			quickBillpage:1,
			pay_least_month:1,
			reduceMode :1,//减免金额的方式
			shows:false,  
			id:'',
			showi:false,
			showp:false,
			showt:true,
			quan1:false,
			quan2:false,
			quan3:false,
			one:'one',
			permit_skip_pay:'1',
			bottomStatus: '',
			is_null:''
	  	}
	  },
	  filters:{
		  moment
	  },
	  watch:{
		selected(newv,old){
      isloadPage=false;
      
    }

	  },
	  created(){
	  	vm = this;
	  },
	  mounted(){
		//   this.initSession4Test();
	  	//微信配置
	  	let url = location.href.split('#')[0]
		vm.receiveData.wxconfig(vm,wx,['scanQRCode'],url);
		  
	  	//请求 停车缴费 和 物业缴费首屏数据
	  	vm.receiveData.getData(vm, vm.url, 'data',function(){
	  		vm.pay_least_month = vm.data.result.pay_least_month;
	  		vm.billInfo = vm.data.result.bill_info;//物业缴费
	  		vm.reduceMode = vm.data.result.reduce_mode;//减免方式
			vm.carBillInfo = vm.data.result.car_bill_info;//停车缴费
			vm.permit_skip_pay=vm.data.result.permit_skip_pay;//判断跳跃付款  
			vm.billPage += 1;
	  	},vm.params) ;

	
	  },
	  methods:{
		 
//查询账单
		  huhaoserach(){
			  
 vm.receiveData.getData(vm,"/hexiehouse/"+vm.huhao,'res',function(){
			  if(vm.res.success){
				 
					vm.mng_cell_id=vm.res.result.mng_cell_id;
					vm.getversion=vm.res.result.version;
					vm.query.sectID=vm.res.result.sect_id;
					vm.query.house=vm.res.result.mng_cell_id;
					vm.queryBillInfo = []; //清空查询账单列表
					vm.otherbillinfo = []; 
					vm.queryBillPage = 1; //页码重置
					isloadPage=false;//重置加载状态

					vm.queryisLastPage = false; //是否最后一页重置
					 if (vm.getversion == "01") {
						vm.getBillStartDate();
						vm.version = vm.getversion;
						vm.zhuanpay="biaozhun";
					} else {
					
						vm.version = "02";
						vm.queryBillList();
						
					}
					
		  }
 })
		  },
		  handleBottomChange(status) {
			  vm.bottomStatus= status
		  },
		  //模仿线上用户信息
			//105/747/384
		  initSession4Test(){
				let url = '/initSession4Test/105';
					vm.receiveData.getData(vm,url,'Data',function(){
				});
			},
		
	   //标准版时间显示
		  formatDate(date, fmt) {
            var currentDate = new Date(date);
            var o = {
                "M+": currentDate.getMonth() + 1, //月份
                "d+": currentDate.getDate(), //日
                "h+": currentDate.getHours(), //小时
                "m+": currentDate.getMinutes(), //分
                "s+": currentDate.getSeconds(), //秒
                "q+": Math.floor((currentDate.getMonth() + 3) / 3), //季度
                "S": currentDate.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
    },
    specifiName(){
      if(vm.is_null=="0"){
          endData=vm.formatDate(vm.endData,'yyyyMMdd');
          startData=vm.startData;
          vm.wuzhangdan(startData,endData);
          vm. isshow=true;
          }else{
            
            startData = vm.formatDate(vm.startData,'yyyyMMdd');
            endData=vm.formatDate(vm.endData,'yyyyMMdd');
            vm.wuzhangdan(startData,endData);
            vm. isshow=true;
          }
          
        
	},
	wuzhangdan(startData,endData) {
      vm.receiveData.getData(
        vm,
        "/getPayListStd?house_id=" + vm.query.house + "&sect_id=" +vm.query.sectID + "&start_date=" + startData +"&end_date=" +
          endData,
        "res",
        function() {
          if (vm.res.success) {
            if(vm.res.result==null){
              vm.isshow=false;
             }
            vm.otherbillinfo = vm.res.result.other_bill_info;
             vm.isshow=false;
          }else{
			 vm.isshow=false; 
		  }
         
          console.log(addr);
        }
      );
    },
//返回时间
 getBillStartDate() {
      vm.receiveData.getData(
        vm,
        "/getBillStartDateSDO?house_id=" + vm.query.house+"&regionname=",
        "res",
        function() {
          if (vm.res.success) {
           
            vm.is_null=vm.res.result.is_null;
            if(vm.is_null=='0'){
              vm.startData=vm.res.result.start_date;
              vm.standard3 =true;
              vm.standard2=true;
              }else{

              vm.standard1=true;
              vm.standard2=true;
              
             
            }
           
          }
        }
      );
    },


		//请求查询缴费 账单列表
		queryBillList(){
			vm.showp=true;
			let url = 'billList';
			vm.params.house_id = vm.mng_cell_id;
			vm.params.sect_id = vm.query.sectID;
            vm.params.currentPage = vm.queryBillPage;
			// vm.params.currentPage = 1;
			vm.receiveData.getData(vm,url,'queryBillInfo',function() {
          if (vm.queryBillInfo.success) {
            if (vm.queryBillInfo.result == null) {
              vm.queryBillInfo = [];
            } else {
              vm.queryBillPage+=1;
              vm.permit_skip_pay = vm.queryBillInfo.result.permit_skip_pay;
              vm.pay_least_month = vm.queryBillInfo.result.pay_least_month; //3月份
              vm.reduceMode = vm.queryBillInfo.result.reduce_mode; //从新赋值减免方式
              vm.park_discount_rule_conf=vm.queryBillInfo.result.park_discount_rule_conf;//物业减免
              vm.park_discount_rule=vm.queryBillInfo.result.park_discount_rule;

              // console.log('我是减免方式:'+vm.queryBillInfo.result.reduce_mode+'我把他赋值给'+vm.reduceMode)

              if (
                vm.queryBillInfo.result.bill_info &&
                vm.queryBillInfo.result.bill_info.length > 0
              ) {
                vm.queryBillInfo = vm.queryBillInfo.result.bill_info;

                // vm.showp = false;
              } else {
                alert("没有搜索到账单");
                vm.queryBillInfo = [];
              }
            }
          } else {
            alert("没有搜索到账单");
            vm.queryBillInfo = [];
          }
          vm.showp = false;
        },
			vm.params)
		
		},

	  	submit(){
	  		//请求扫码快速缴费数据
	  		if(vm.stmtId == "" || vm.stmtId.length != 18){
	  			alert('请输入正确账单号');
	  			return ;
			  }
			isloadPage=false; //重置加载状态
			vm.quickAllselect = false;//重置加载状态
            vm.quickBillpage = 1;
	  		let url = "quickPayBillList/"+vm.stmtId+"/"+vm.quickBillpage+"/"+vm.params.totalCount;
	  		vm.receiveData.getData(
	  			vm,
	  			url,
	  			'quickData',
	  			function(){
	  				if( vm.quickData.result && vm.quickData.result.bill_info.length>0){
						vm.permit_skip_pay = vm.quickData.result.permit_skip_pay;
						vm.quickBillInfo = vm.quickData.result.bill_info;
						vm.reduceMode = vm.quickData.result.reduce_mode;
						vm.pay_least_month = vm.quickData.result.pay_least_month;
						vm.quickBillpage+=1
	  				}else{
	  					alert('未查询到数据')
	  				}
	  			}
	  		)

		  },
		   //分页 
		 getscroll(e) {
			var st = e.srcElement.scrollTop;
			// console.log(st);
			var ad=window.innerHeight
			var hd=$('#word').height();
			// console.log(st+ad)
			if( st+ad >=hd && !isloadPage) {
				isloadPage=true;
				if(vm.selected=='a'){
					vm.queryLoadBottom();
				}else if(vm.selected=='b') {
					vm.loadBottom();
				}else {
					vm.quickloadBottom();
				}
			}
       },  	
		  queryLoadBottom(){//查询缴费上拉加载数据
		 
	  		let tempArr = null;
	  		//页码加1
	  		// vm.queryBillPage += 1;
	  		vm.params.currentPage = vm.queryBillPage;
	  		let url = 'billList';
	  		vm.receiveData.getData(vm,url,'pageData4',function(){
	  			tempArr = vm.pageData4.result.bill_info;
	  			if( tempArr && tempArr.length > 0){
					  vm.queryBillInfo =vm.queryBillInfo.concat(tempArr) //快捷缴费
					   vm.queryAllselect=false;
						vm.queryBillPage+=1;
						isloadPage=false;
	  			}else{
					  vm.quan3=true;
					//   vm.queryisLastPage = true;
				  }
				  
			// vm.$refs.loadmore.onBottomLoaded();

			},vm.params)
	
	  	},

		  quickloadBottom(){//快捷缴费上拉加载数据
		  
	  		//临时接收的数组
	  		let tempArr = null;
	  		//页码加1
	  		// vm.quickBillpage +=1;
  			let url = "quickPayBillList/"+vm.stmtId+"/"+vm.quickBillpage+"/"+vm.params.totalCount;
	  		//请求接口数据
	  		vm.receiveData.getData(
	  			vm,
	  			url,
	  			'pageData3',
	  			function(){
	  				tempArr = vm.pageData3.result.bill_info;
	  				if( tempArr && tempArr.length > 0){
						  vm.quickBillInfo =vm.quickBillInfo.concat(tempArr) //快捷缴费
						  vm.quickAllselect = false;
						  vm.quickBillpage += 1;
						  isloadPage=false;
	  					

	  				}else{
						  vm.quan1=true;
						//   vm.quickisLastPage = true;
						 
					}
					
					// vm.$refs.loadmore1.onBottomLoaded()
	  			})
				
				
	  	},
		  loadBottom(){//物业缴费 上拉加载数据
		 
	  		//临时接收的数组
  			let tempArr = null;
	  		//页码自增 
	  		// vm.billPage += 1;
			vm.params.currentPage = vm.billPage;
			//请求接口数据
			vm.receiveData.getData(
				vm,
				vm.url,
				'pageData',
				function(){
					 vm.billPage += 1;
	  				tempArr = vm.pageData.result.bill_info;//物业缴费
	  				if(tempArr && tempArr.length > 0){
	  					vm.billInfo =vm.billInfo.concat(tempArr) //物业缴费
						  vm.bAllSelect = false;
                          isloadPage=false;
	  				}else{
						  vm.quan2=true;
						//   vm.bisLastPage = true;
					}
			 		//  vm.$refs.loadmore2.onBottomLoaded()  		
	  			},vm.params)
       
	  	},

	  	//点击物业缴费按钮
	  	pay(list,allPrice,allselect, otherbillinfo, queryallPrice1){//第一个参数 账单数组，第二个参数 总价 第三个参数 是否全选,所有参数 string
			if (vm.getversion == "01") {
        if (vm[queryallPrice1] < 0.01) {
          alert("请选择帐单后支付");
          return;
        }
        
        window.location.href =vm.config.wuye_payment.payment+"&totalPrice="+vm[queryallPrice1] +"&house_id=" +
          vm.query.house +"&sect_id=" +vm.query.sectID + "&start_date=" +startData + "&end_date=" + endData +"&getversion=" + '01';
      }else{
			if( vm[allPrice] < 0.01){
	  			alert('请选择账单后支付');
	  			return
			  }
	  		let selectedArr = [];//所有数据 
	  		var sel_bill_arr = new Array(); //日期
	  		if(vm[allselect] == true){
	  			//全部选中
	  			for(let i in vm[list]){
	  				var ret = jQuery.inArray(vm[list][i].service_fee_cycle,sel_bill_arr);
		  			if(-1 == ret){
		  				sel_bill_arr.push(vm[list][i].service_fee_cycle);
		  			}	
  					selectedArr.push(vm[list][i])
	  			}

	  		}else{
	  			//只选中一部分
	  			for( let i in vm[list]){
	  				if(vm[list][i].selected){
	  				var ret = jQuery.inArray(vm[list][i].service_fee_cycle,sel_bill_arr);
			  			if(-1 == ret){
			  				sel_bill_arr.push(vm[list][i].service_fee_cycle);
			  			}	
	  					selectedArr.push(vm[list][i])
	  				}
	  			}
	  		}
	  		let bills="";//id
	  		let pay_addr = selectedArr[0].pay_addr;
	  		//let pay_addr = sel_bill_arr[0].pay_addr;
	  		for(let i in selectedArr){
	  			if(selectedArr.length - 1 == i){
	  				bills+=selectedArr[i].bill_id;
	  			}else{
	  				bills+=selectedArr[i].bill_id+',';	
	  			}	  			
	  		}
	  		if(vm.pay_least_month>0){
				if(vm.pay_least_month>sel_bill_arr.length){
					alert("请至少选择"+vm.pay_least_month+"个月的账单进行支付。");
					return false;
				}
			}
	  		// ----------
	  		//跳转支付
	  		let url = vm.config.wuye_payment.payment+"billIds="+bills+"&stmtId="+vm.stmtId+"&payAddr="+escape(pay_addr)+"&totalPrice="+vm[allPrice]+"&reduceMode="+vm.reduceMode+"&getversion=" + "02";
            window.location.href = url;
}
	  	},

	  	//调用微信扫一扫接口, 成功 数据返回到stmtId,显示在input上
	  	show(){
	  	 	vm.receiveData.scan(vm,wx,'stmtId');
	  	},
	  	//点击某个选中按钮 params1:被点击按钮的下标 params2:被点击按钮所属的数组
		  itemClick:function(index,version, b, otherBillinfo){//3个页面对应不同的三个数组 
		  if (version == "01") {
        if (otherBillinfo[index].selected) {
          vm.$set(otherBillinfo[index], "selected", false);
        } else {
          vm.$set(otherBillinfo[index], "selected", true);
        }
      }else{
	  		let len = b.length;
	  		if (b[index].pay_status!="02") {
	  			return;
			  }
			 
			 //permit_skip_pay  0允许  1不允许
			if(vm.permit_skip_pay == '1') {
				if(b[index].selected){//选中状态下
					for(let i=index;i< len;i++){
						//后面的全部取消选中
						vm.$set(b[i],'selected',false);	

					}
					//某一个点击了取消后全选消失
					vm.bAllSelect = false;
					vm.queryAllselect=false;
					vm.quickAllselect=false;
					//    console.log(vm.bAllSelect)
				}else{//未选中状态下，前面全部选中
					for(let j=index;j >= 0;j--){//
						vm.$set(b[j],'selected',true);	
						
					}
				}
			}else if(vm.permit_skip_pay == '0'){
				if(b[index].selected){//选中状态下
					vm.$set(b[index],'selected',false);	
					//某一个点击了取消后全选消失
					vm.bAllSelect = false;
					vm.queryAllselect=false;
					vm.quickAllselect=false;
					//    console.log(vm.bAllSelect)
				}else{//未选中状态下，前面全部选中
						vm.$set(b[index],'selected',true);	
					}
			}else {
				if(b[index].selected){//选中状态下
					for(let i=index;i< len;i++){
						//后面的全部取消选中
						vm.$set(b[i],'selected',false);	

					}
					//某一个点击了取消后全选消失
					vm.bAllSelect = false;
					vm.queryAllselect=false;
					vm.quickAllselect=false;
					//    console.log(vm.bAllSelect)
				}else{//未选中状态下，前面全部选中
					for(let j=index;j >= 0;j--){//
						vm.$set(b[j],'selected',true);	
						
					}
				}
			}
			}
	  		
	  	},

	  	//点击全选按钮 params:需要被全部选中的数组
	  	allSelect:function(arr,a){
	  		if(vm[a] ){//取消全选
	  			for(let i in arr){
					  vm.$set(arr[i],'selected',false);
					 
	  			}
	  		}else{//全部选中
	  			for(let i in arr){
			  		if(vm.$set(arr[i],'selected',true)){
						  vm.$set(arr[i],'selected',true);
						  
  					}			  				
	  			}
	  		}
	  		//取反
	  		vm[a] = !vm[a];
	  	}
	}
}
</script>
<style>
	.mint-tab-item-label{
		font-size: 0.3rem;
	}
</style>
<style scoped> 

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
 
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

	a{color:black}
	/*查询缴费*/
	.input-row .classinput {
		 padding-right:0.36rem;
		 font-size:.26rem;
		  /* user-select: none; */
	}

	.query-data{
		/* height: 100%; */
		padding: 0.25rem 0.4rem;
		margin-bottom: 0.2rem;
	}
	.virtual-input{
		width:3.4rem;
		border:1px solid #4c4c4c;
		border-radius: 5px;
		padding-left: 0.2rem;
		display: inline-block;
		height: 0.6rem;
		background-color: #fff;
		font-size:16px;
		box-sizing: border-box;
		text-align:left;
		color:black;
		line-height:.6rem;
	}
	.input-row{
		padding-bottom: 0.1rem;
		font: 0.26rem/0.5rem "";
		color: #a6937c;
		height: 0.6rem;
		position: relative;
		margin-top: .3rem;
		/* float: left; */
		text-align: right;
		width: 88%;
	}

   .input-row .input-uis {
	width: 3.5rem;
    position: absolute;
    top: 32px;
    left: 39px;
    height: 184px;
    z-index: 666;
    background-color: #F5F4F3;
    overflow: hidden;
    color: #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: auto;
	}
	.input-row .input-uis li {
		overflow: hidden;
		font-size: 16px;
		height:30px;
		line-height:30px;
		border-bottom: 1px solid #ccc;
		letter-spacing: 0.08rem;
		color: #707070;
		padding-left:0.2rem;
		background-color:#fff;
	}
	.classc {
		position: absolute;
		right: 14px;
		top:5px;
		color: #ccc;
		font-size: 20px;
	}
	.test::-webkit-scrollbar {
		width:0.2rem;
		height:1px;
	}
	.test::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #fff;
    }
	.test::-webkit-scrollbar-track {/*滚动条里面轨道*/
        /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
        border-radius: 10px;
        /* background: #EDEDED; */
    }
	.top2{
		position: relative;
		top: -0.2rem;

	}
	/*footbtn start*/
	.blank{
		padding-bottom: 1rem;
	}

	.btn-fixed{
		position: fixed;
		color: #fff;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.92rem;
        line-height: 0.92rem;
        text-align: center;
	}
	
	.select-btn{
		padding-left: 36px;
        background: url('../../assets/images/pay/icon_unselect_white.png') no-repeat;
        background-color: rgba(0,0,0,0.6);
        background-size: 16px;
        background-position: 15px center;
        height: 0.92rem;
        line-height: 0.92rem;
	}

	.allSelected{
		background: url('../../assets/images/pay/icon_selected_white.png') no-repeat;
		 background-color: rgba(0,0,0,0.6);
        background-size: 16px;
        background-position: 15px center;

	}

	.pay{
		overflow: hidden;
		background: #ff8a00;
		text-align: center;	
	}

	 
	/*footbtn end*/

	.main{
 		margin:0 0.3rem;
 	}

	 .mint-navbar .mint-tab-item{
	 	border-bottom: 1px solid #cdcdcb;
	 }

	 .mint-navbar .mint-tab-item.is-selected{
	 	border-bottom: 1px solid #ff8a00;
	 	margin-bottom: 0;
	 	color:#ff8a00;
	 }

	 .lite-divider{
		border-bottom: 1px solid #d4cfc8;
		-padding-left: 0.15rem;
		overflow: hidden;
		padding: 1px;
		margin-top:35px;
	}
	.hidden-input{
		height: 0.4rem;
		margin-top: 0.4rem;
		width: 4rem;
		-background: black;
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 0.28rem;
		padding: 0 0.15rem 0.15rem;
	}

	.scan-icon{
		float: right;
		display: inline-block;
		height: 0.4rem;
		width: 0.4rem;
		background: url('../../assets/images/house/icon_scan.png') ;
		background-size: cover;
		margin-top: 10px;
	}
	.subBtn{
		height: 0.88rem;
		line-height: 0.88rem;
		background-color: #ff8a00;
		font-size: 0.3rem;
		color: white;
		width: 6rem;
		margin: 0.6rem auto 0;
	}

	/*加载中*/
	#phoneErro {
		margin: 100px auto 0;
		top: 25%;
		left: 25%;
		width: 50%;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background-color: #ccc;
		-moz-opacity: .8;
		opacity: .80;
		filter: alpha(opacity=80);
		position: fixed;
		z-index: 1999;
		overflow: auto;
		color: white;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		font-size: 14px;
		display: none
	}

	#phoneAjax {
		position: fixed;
		top: 20%;
		left: 50%;
		width: 60px;
		height: 60px;
		line-height: 60px;
		margin-left: -30px;
		text-align: center;
		background-color: #ccc;
		-moz-opacity: .8;
		opacity: .80;
		filter: alpha(opacity=80);
		z-index: 1998;
		overflow: auto;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px
	}
	.hidden {
		visibility: hidden
	}
	.city {
    background-color: #FFF;
	}
	.city2 {
    background-color: #E0E0E0;
	}
	/* 查询账单样式 */
	#word{
	overflow: hidden;
	width: 100%;
	position: relative;
	/* background: #eee; */
	}
	/* 滚动 */
	#divwuye {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
</style>