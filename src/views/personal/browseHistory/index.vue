<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>浏览记录</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<historyItem  @goDetail="goDetail" :historyList="historyList" ></historyItem>
	</div>	
</template>

<script>
	import { useRouter } from 'vue-router'
	import xlCourseCard from "../../../components/courseCard/xlCourseCard.vue";
	import historyItem from "../../../components/personal/browHistory/historyItem.vue"
	import {getBrowseRecordList,myLovelist} from "../../../api/course.js"
	import {ref,onMounted} from "vue"
	export default{
		name: "index",
		components:{
			historyItem,
			xlCourseCard
		},
		setup(){
		const router =useRouter()	
			
		// 获取浏览记录列表
		const historyList =ref([])
        const getHistory = async ()=>{
		    const res = await getBrowseRecordList({
				pageNo: 1,
				pageSize: 10,
				userId: localStorage.getItem('user_id')
			})
			historyList.value=res.data
			console.log(historyList.value)
		}
		const goDetail =(item)=>{
			router.push({
						  path:'/courseDetail',
						  query: {
						    courseId: item.courseId==undefined ? item.id : item.courseId ,
						    courseType: item.courseType==undefined ? item.type : item.courseType
						  }
			})
		}
		
		 
		onMounted(()=>{
			getHistory()
			
			
		})	
			return{
				historyList,
				getHistory,
				goDetail
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
