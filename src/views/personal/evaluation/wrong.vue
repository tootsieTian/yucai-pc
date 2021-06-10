<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的错题</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="course-con f" >
			<courseCard  :iswrong="true" @goWrong="goanalysis" class="course" v-for="(item,index) in 6" :key="index" >
			</courseCard>
		</div>
		
	</div>	
</template>

<script>
	import courseCard from "../../../components/courseCard/xsCourseCard.vue"
	import router from "../../../router/router.js"
	export default{
		name:"analysis",
		components:{
			courseCard
		},
		setup(){
			const goanalysis = ()=>{
				router.push('analysis')
			}
			return{
				goanalysis
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
		.course-con{
			width: 100%;
			flex-flow: wrap;
			margin-top: 35px;
			margin-left: 37px;
			margin-top: 37px;
		}
		.course{
			width: calc((100% - 66px )/3);
			margin-right: 22px;
			margin-bottom: 25px;
		}
		}
</style>

