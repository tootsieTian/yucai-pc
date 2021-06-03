<template>
	<div class="header">
		<div class="tit-con f">
			<div class="left"></div>
			<div class="right">
				<div class="t1">你真的懂得心理学吗？</div>
				<div class="t2">心理学 ｜ 已测298人</div>
				<div class="t3">5.00</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="tab" >包含试卷</div>
		<div style="width: 100%;" class="f-a-j" >
			<testPaper @confirm="confirm" ></testPaper>
		</div>
		
	</div>
</template>

<script>
	import router from "../../../router/router.js"
	import testPaper from "../../../components/personal/evaluation/testPaper.vue"
	export default{
		name:"buyEvalation",
		components:{
			testPaper
		},
		setup(){
			const confirm = ()=>{
				router.push('order')
			}
			return{
				confirm
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 255px;
		background: #F5F5F5;
		width: 100%;
		position: relative;

		.tit-con {
			position: absolute;

			height: 140px;

			bottom: -70px;
			left: 362px;

			.left {
				height: 140px;
				width: 140px;
				background: #EBEBEB;

			}

			.right {
				padding: 18px 10px 7px 39px;
				box-sizing: border-box;

				.t1 {
					font-size: 24px;
					font-weight: 500;
					line-height: 33px;
					color: #333333;
					margin-bottom: 24px;
				}

				.t2 {
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
					margin-bottom: 18px;
				}

				.t3 {
					font-size: 20px;
					font-family: DIN;
					font-weight: 500;
					line-height: 24px;
					color: #333333;
				}
			}
		}
	}

	.footer {
		padding-bottom: 159px;
		width: 100%;
		.tab{
			margin-top: 155px;
			margin-bottom: 27px;
			font-size: 17px;
			font-weight: 500;
			line-height: 24px;
			color: #333333;
			margin-left: 360px;
		}
	}
</style>
