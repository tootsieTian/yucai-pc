<template>
	<div class="con" >
	<div class="header ">
		
	</div>
	<div class="footer container-main">
		<div class="tit-con f">
			<div class="left">
				<img src="../../../assets/icon/sucai/doge.jpeg" alt="">
			</div>
			<div class="right">
				<div class="t1">你真的懂得心理学吗？</div>
				<div class="t2">心理学 ｜ 已测298人</div>
				<div class="t3">5.00</div>
			</div>
		</div>
		<div class="tab" >包含试卷</div>
		<div style="width: 100%;" class="f-a-j" >
			<testPaper @confirm="confirm" ></testPaper>
		</div>
		
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
	.con{
		background-color: rgba(245, 246, 246, 1);
	}
	.header {
		height: 255px;
		background-image: url(../../../assets/icon/sucai/course1.png);
		background-color: #000000;
		filter: blur(10px);
		width: 100%;
		position: relative;
        background-size: cover;
	    background-position: -100px 800px;
		
	}
	.tit-con {
		position: absolute;
	
		height: 140px;
	
		top: -220px;
		left:110px;
	
		.left {
			height: 140px;
			width: 140px;
			box-shadow: 0 4px 10px #000000;
			img{
				height: 140px;
				width: 140px;
				border-radius: 4px;
			}
	       
		}
	
		.right {
			padding: 18px 10px 7px 39px;
			box-sizing: border-box;
	       
			.t1 {
				font-size: 24px;
				font-weight: 500;
				line-height: 33px;
				color: #FFFFFF;
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

	.footer {
		padding-bottom: 159px;
		width: 100%;
		position: relative;
		.tab{
			margin-top: 155px;
			margin-bottom: 27px;
			font-size: 17px;
			font-weight: 500;
			line-height: 24px;
			color: #333333;
			margin-left: 110px;
		}
	}
</style>
