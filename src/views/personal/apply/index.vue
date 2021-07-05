<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>申请服务商</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="con f" >
			<el-button  @click="goDetail(0)"  class="apply perbg " >申请个人讲师</el-button>
			<el-button  @click="goDetail(1)"  class="apply combg" >申请入驻机构</el-button>
		</div>
	</div>	
</template>

<script>
	import {ref,reactive} from "vue"
	import router from "../../../router/router.js"
	export default {
		setup(){
			const goDetail = (int)=>{
				if(int==0){
					router.push('applyPerson')
				}
				if(int==1){
					router.push('applyMechanism')
				}
			}
			return {
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
		.apply{
			width: 312px;
			height: 136px;
			background-size: 100%;
			opacity: 1;
			font-size: 24px;
			font-weight: 400;
			line-height: 22px;
			color: rgba(255, 255, 255, 1);
			margin-right: 31px;
			border: 0;
			text-align: left;
		}
		.con{
		    padding: 73px 0 171px 48px;
			box-sizing: border-box;
		}
		.perbg{
			background-image: url(../../../assets/image/personal/applyPerson.png);
		}
		.combg{
			background-image: url(../../../assets/image/personal/applyCompany.png);
		}
		}
</style>
