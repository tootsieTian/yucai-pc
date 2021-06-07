<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的成就</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="item-con f" >
			<div v-for="(item,index) in 3" :key="index"  >
				<div class="item" ></div>
				<div class="tit1 f-a-j" >测评满分成就</div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		name:"achievement",
		setup(){
			return{
				
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
		.item-con{
			// flex-flow: wrap;
			padding: 42px 30px 0 57px;
			.item{
				width: 226px;
				height: 301px;
				background: #F2F2F2;
				margin-right: 40px;
			}
			.tit1{
				height: 80px;
				width: 226px;
				font-size: 17px;
				font-weight: 400;
				line-height: 24px;
				color: #333333;
			}
		}
		}
</style>
