<style scoped>     
	.myhouse{         
		font-size: 0.26rem; 
	}
	.huzhu{font-size: 0.34rem;font-weight: bold;}
	.bottomBtn{
		font-size: 0.35rem;         
		position: fixed;         
		bottom: 0;
		height: 49px;         
		background-color:#ff8a00;         
		color:white;letter-spacing: 2px;
		width: 100%;line-height: 49px;text-align: center;
		overflow: hidden;     
	}

	.nohouse{
		position: fixed;
		left: 0;
		top: 0;
		height:100%;
		width: 100%;
		/*background: #ff8a00;         */
		/* height:10rem;         
		background: url('../../assets/images/house/bg_nohouse.jpg') no-repeat center center;
		background-size: cover;         
		-moz-background-size:100% 100%;      */
	}
	.nohouse img{
		height: 100%;
		width: 100%;
	}
	.house-list{
		list-style: none;
		padding: 0;
		margin-top: 0.1rem;
	}
	.house-list li{
		padding:0 0.26rem 0.3rem;
		overflow: hidden;
		border-bottom: 0.2rem solid #f6f7f2;
	}

	.house-list li p{
		height: 0.7rem;
		line-height: 0.7rem;
		margin:0;
		overflow: hidden;
	}

	.del-icon{
		background: url('../../assets/images/house/icon_cancel.png') no-repeat center;
		background-size: cover;
		width: 25px;
		height: 25px;
		margin-top: 5px;
	}
</style>

<template>
	<div class="myhouse">
		<div class="nohouse" v-if="dataArr.length == 0">
			<img src="http://img.e-shequ.cn/FocY5yjN1xKzMAjTrr-2q8qUFDp2" alt="">
		</div>
		<ul class="house-list" v-else>
			<li v-for="(i,index) in dataArr" :key="index">
				<p>
					<span class="fl huzhu">{{i.sect_name}} {{i.city_name}}</span>
					<i  @click="del(i,index)" class="fr del-icon" ></i>
				</p>
				<p>
					<span class="fl">{{i.cell_addr}}</span> 
					<span class="fr">{{i.cnst_area}}平米</span>
				</p>
				<p>{{i.ver_no}}（户号） {{i.cust_name}}</p>
				
			</li>
		</ul>
		<div class="bottomBtn" @click="addHouse">添加房子</div>
		<!-- <mt-button  size="large" class="bottomBtn" @click.native="addHouse" ></mt-button> -->
	</div>
</template>
<script>
	let vm;
	import { MessageBox, Toast } from 'mint-ui';
	export default {
	  created(){
	  	vm = this;
	  },
	  mounted(){//查看房子列表
	  	vm.showList();
	  },
	  data(){
	  	return {
	  		dataArr:[]
	  	}
	  },
	  methods:{
	  	showList(){
	  		let url = '/hexiehouses';
		  	vm.receiveData.getData(vm,url,'data',function(){
		  		//console.log(vm.data.result)
		  		if(vm.data.result != null){
			  		vm.dataArr = vm.data.result		  			
		  		}else{
		  			vm.dataArr = []
		  		}
		  	})
	  	},
	  	addHouse(){
	  		// this.common.checkRegisterStatus();
			  this.$router.push("/identHouse")
			  
	  	},
	  	del(value,index){
	  		MessageBox.confirm('确定要删除吗?').then(action => {
				//删除数组下的改对象
				vm.dataArr.splice(index,1)
		  		let url='/hexiehouse/delete/'+ value.mng_cell_id;
		  		vm.receiveData.getData(vm, url, 'delData',function(){
		  			//回调函数 判断删除成功与否 暂放
		  			//console.log(vm.delData)
		  			Toast({
					    message: '删除房子成功',
						iconClass: 'icon icon-success',
					    duration: 1000,
					    position: 'middle'
					});
		  		})
			}).catch(reject =>{//点击了取消
				//console.log(reject)
				return
			})
			;
	  		
	  		
	  	}
	  }
	}
</script>