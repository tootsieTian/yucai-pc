<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的测评</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div @click="goBuy" >立即购买</div>
	</div>	
</template>

<script>
	import router from "../../../router/router.js"
	export default{
		name:"analysis",
		setup(){
			const goBuy = ()=>{
				router.push('buyEvaluation')
			}
			return{
				goBuy
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
