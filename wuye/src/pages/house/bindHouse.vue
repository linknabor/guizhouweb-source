<style scoped>
	.bottomBtn{
		font-size: 0.35rem;         
		position: fixed;         
		bottom: 0;
		height: 49px; overflow: hidden;        
		background-color:#ff8a00;         
		color:white;letter-spacing: 2px;
		width: 100%;line-height:49px;text-align: center;     
	}
	ul{
		margin: 0.1rem 0 0;
		padding: 0;
	}
	ul li{
		line-height: 0.7rem;
		color: #000;
		padding: 0.1rem 0.15rem;
		list-style: none;
		overflow: hidden;
	}
	.fr{
		float: right;
		
	}
</style>

<template>
	<div class="bindhouse">
		<ul  v-show="canAddhouse ">
			<li>{{data.sect_name}}&nbsp;{{data.city_name}}</li>
			<li>
				<span class="fl">{{data.cell_addr}}</span>
				<span class="fr">{{data.cnst_area}}平米</span>
			</li>
			<li>
				{{data.ver_no}}(户号)&nbsp;{{data.cust_name}}
			</li>
		</ul>
		<!-- <loading v-show="loadingShow"></loading> -->
		<div class="bottomBtn"  @click="addHouse">绑定房子</div>
		<!-- <mt-button  size="large" class="bottomBtn" @click.native="addHouse" >绑定房子</mt-button> -->
	</div>
</template>

	
<script>
	let vm;
	import { MessageBox } from 'mint-ui';
	export default {
	  data(){
	  	return{
	  		loadingShow : true,
	  		data:{
				  name:'',
	  		},
	  		axiosParams:{
				number: this.$route.params.number
				
			},
			type:this.$route.query.type,
			canAddhouse:false,

	  	}
	  },
	  components:{},
	  created(){
	  	vm = this;
	  },
	  mounted(){
		  //查询number下的房屋 1户号绑定  2账单绑定
		  let url;
		  if(vm.type=='1'){
	 		url = '/hexiehouse/'+this.axiosParams.number;
		  }else	if(vm.type=='2') {
	  		url = '/hexiehouse?stmtId='+ this.axiosParams.number+'&house_id=';
		  }else {
			return
		  }
  		vm.receiveData.getData(vm,url,'response',function(){
			  if(vm.response.success) {
					if(vm.response.result== null) {
						vm.data={}
						alert('未查询到该房屋')
						vm.canAddhouse=false;
					}else {
						vm.data = vm.response.result
						vm.canAddhouse=true;
					}
			  }else {
				  alert(vm.response.message==null?'未查询到该房屋':vm.response.message)
			  }
			  
  		})
	  },
	  methods:{
		  addHouse(){//添加房子 post 提交两个参数 
				// let stmtId = this.axiosParams.number;
				let url2 = '/addhexiehouse?houseId='+this.data.mng_cell_id+"&stmtId=";
				vm.receiveData.postData(vm,url2,this.data,'res',function(){
					// vm.loadingShow = false;
					if(vm.res.success){
						if(vm.res.result !== null){
							MessageBox.alert('添加房子成功', vm.config.house_domain.domain).then( action =>{
								vm.$router.push("/myHouse")
							})
						}else{
							MessageBox.alert('当前用户已经认领该房屋！', vm.config.house_domain.domain).then( action =>{
								vm.$router.push("/myHouse")
							})
						}
					}else{
						MessageBox.alert(vm.res.message).then( action =>{
							vm.$router.push("/myHouse")
						})
					}
				})
	  	}
	
	  }
	}
</script>