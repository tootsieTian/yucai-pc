
	<template>
		<div class="contair">
			<div class="tit f-s f-a">
				<div>课程收藏</div>
				<div></div>
			</div>
			<div class="hx"></div>
			<collectItem :collectList="collectList" ></collectItem>
			<div class="f-a-j" >
				<el-pagination
				  background
				  layout="prev, pager, next,jumper"
				  :total="70">
				</el-pagination>
			</div>
			
		</div>	
</template>

<script>
	import collectItem from "../../../components/personal/collection/collectItem.vue"
	import {getCollectlist} from "../../../api/course.js"
	import {ref} from "vue"
	export default{
		name: "index",
		components:{
			collectItem
		},
		setup(){
          // 获取收藏列表
		  const pageNo = ref(1)
		  const collectList = ref([])
		  const getCollect =  async (pageNO)=>{
			  const res = await getCollectlist({
				  pageNo:pageNO,
				  pageSize:6,
				  userId:localStorage.getItem('user_id')
			  })
			 
			  collectList.value=res.data
		  }
		  getCollect(pageNo.value)
		  return {
			  collectList,
			  getCollect,
			  pageNo
		  }
			
		}
	}
</script>

<style lang="scss" scoped >
	.contair {
		width: 100%;
		padding-bottom: 58px;
		padding-right: 45px;
		box-sizing: border-box;
		font-family: PingFang SC;
	
		.tit {
			height: 78px;
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			color: #333333;
			opacity: 1;
			margin-left: 48px;
		}
	
		.hx {
			height: 1px;
			width: 100%;
			background: #F5F5F5;
		}
		}
</style>

