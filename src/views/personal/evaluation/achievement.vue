<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的成就</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="item-con f " >
			<div class="f-a-j f-c" style="margin-right: 20px;"  v-for="(item,index) in 3" :key="index"  >
				<div class="item" >
					<img src="../../../assets/image/personal/chengjiu.png" alt="">
				</div>
				<div class="tit1 f-a-j f-c" ><div>测评满分成就</div>
				<div style="color: #999999;font-size: 12px;" >2021.05.06获得</div>
				</div>
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
				
				
				img{
					width: 226px;
					height: 301px;
				}
			}
			.tit1{
				width: 165px;
				height: 56px;
				background: #F4F4F4;
				font-size: 14px;
				font-weight: 400;
				line-height: 24px;
				color: #333333;
			}
		}
		}
</style>
