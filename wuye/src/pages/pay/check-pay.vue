<template>
	<div>
		<div class="main">
		<div class="mint-tab-container-item">
		<div class="query-data">
			  	<div class="input-row">
			  		户号：
			  		<input type="text" class="virtual-input" placeholder="请输入户号" value="" v-model="huhao">
					  
			  	</div>
		  	</div>
			<div style="width:100%;height:0.92rem;"></div>
			<div class="btn-fixed" id="st">
	    		<!-- <div v-show="quan" class="fl select-btn" :class="{allSelected:queryAllselect }" @click="allSelect(queryBillInfo,'queryAllselect')">全选&nbsp;</div> -->
	    		<button class="pay" @click="addRoom">添加房屋</button>
	    		
       		</div>
       		</div>
       		</div>
       		</div>
</template>

<script>
	let vm;
	let timer;
	import { MessageBox } from 'mint-ui';
	import axios from 'axios';
	import Bill from '../../components/bill.vue';
	import '../../tap.js'
	export default{
		data(){
			return{
				
		  		query:{//查询缴费数据
		  			sect:'',//小区
					sectID:'',//小区id
		  			build:'',//楼宇id
		  			unit:'',//门牌id
		  			house:'',//室号id
		  			area:'',//建筑面积id
				  },
				  huhao:'',
		  		stmtId:'',//快捷缴费 扫描出来的账单号
		  		url : '/billList?regionname=上海市',
		  		
		  		shows:false,
		  		showi:false,
				showp:false,
				// quan:false,
				quan1:false,
				quan2:false,
				queryisLastPage:false,//查询缴费是否为最后一页
				queryBillInfo : [],//查询缴费数据
				queryAllselect:false,//查询缴费全选
				wuyeId:0,
				choosehouse:0
			}
		},
		created(){
			vm=this;
		},
		mounted(){
			// this.common.checkRegisterStatus();
		},
		components:{Bill},
		
		methods:{
	
			addRoom(){//判断是否为正确账单号
	  	 	var reg = /^\d{12}$/
			if(reg.test(this.huhao)){//为数字即通过
			   	vm.house()
	  	 	}else{
	  	 		MessageBox.alert('请输入正确户号', vm.config.house_domain.domain);
			   }
		
		   },
		   house() {
			let url = '/hexiehouse/'+vm.huhao;
			vm.receiveData.getData(vm,url,'response',function(){
				if(vm.response.success) {
						if(vm.response.result== null) {
							alert('未查询到该房屋')
						}else {
	  	 					vm.$router.push('/bindHouse/' + vm.huhao);
						}
				}else {
					alert(vm.response.message==null?'未查询到该房屋':vm.response.message)
				}
				
			})
		   }
		},

	}
	
</script>

<style scoped>
	.disabled{
		pointer-events: none;
	    cursor: default;
	    opacity: 0.6;
	}
	.main{
		margin: 0 .3rem;
	}
	.mint-tab-container-item{
	flex-shrink: 0;
    width: 100%;
	}
	.query-data{
		/* height: 100%; */
		padding: 0.25rem 1rem;
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
		font-size:.27rem;
		box-sizing: border-box;
		margin-top: .5rem;
	}
	.input-row{
		padding-bottom: 0.3rem;
		font: 0.26rem/0.5rem "";
		color: #a6937c;
		height: 0.6rem;
		position:relative;
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
.last{
		margin-left: -28px;
	}
	.add{
		color: #ff1a1a;
		margin-left:45px;
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
		font-size: 0.35rem;         
		position: fixed; 
		display: block;        
		bottom: 0;outline:none;
		height: 49px;    overflow: hidden;     
		background-color:#ff8a00;         
		color:white;letter-spacing: 2px;
		width: 100%;line-height: 49px;text-align: center;
	}
</style>