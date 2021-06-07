<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>浏览记录</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<historyItem></historyItem>
	</div>	
</template>

<script>
	import historyItem from "../../../components/personal/browHistory/historyItem.vue"
	export default{
		name: "index",
		components:{
			historyItem
		},
		setup(){}
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
