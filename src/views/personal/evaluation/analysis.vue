<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: 'wrong' }">我的错题</el-breadcrumb-item>
					<el-breadcrumb-item>错题解析</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="sel-con" >
		<div class="first-tit" >你真的懂心理学的1题错题</div>
		<div class="second-tit" >查看原测试题</div>
		<div class="title" >2、各种原因引起的心境低落为主的精神状态为（）。</div>
		<div class="select-con" >
			<div v-for="(item,index)  in selectList" class="selet-item f" >
				<div class="yuan f-a-j" >{{item}}</div>
				<div>焦虑</div>
			</div>
		</div>
		<div class="footer" >
			<div style="margin-bottom: 16px;" >你的答案为 A</div>
			<div style="padding-left: 9px;" @click="openDetail" >{{isopen ? '收起' :"查看" }}正确答案与解析</div>
			<div v-show="isopen" class="open-con" >
				<div style="margin-bottom: 12px;" >正确答案B</div>
				<div>解析：继发于社会心理应激或脑和躯体疾病的心理 异常称为心理障碍</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	import{ref,reactive} from "vue"
	export default{
		name:"analysis",
		setup(){
			const isopen = ref(false)
			const selectList = reactive(["A","B","C","D"])
			const  methods ={
				openDetail(){
					isopen.value=!isopen.value
				}
			}
			return{
				selectList,
				...methods,
				isopen
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contair {
		width: 908px;
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
		.sel-con{
			padding: 48px 37px 0 65px;
			.first-tit{
				margin-bottom: 13px;
				font-weight: 500;
				line-height: 29px;
				color: #333333;
				opacity: 1;
				font-size: 21px;
			}
		.second-tit{
			margin-bottom: 30px;
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			opacity: 1;
		}
		.title{
			margin-bottom: 30px;
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			opacity: 1;
		}
		.select-con{
			
			.selet-item{
				margin-bottom: 18px;
				font-size: 15px;
				font-weight: 400;
				line-height: 21px;
				color: #333333;
				opacity: 0.8;
				.yuan{
					width: 22px;
					height: 22px;
					border-radius: 50%;
					border: 1px solid #707070;
					margin-right: 14px;
				}
			}
		}
		.footer{
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			opacity: 1;
			.open-con{
				padding: 12px 18px 13px 29px;
				font-size: 15px;
				font-weight: 400;
				line-height: 21px;
				color: #333333;
				background: #F2F2F2;
				width: 355px;
				margin-top: 14px;
			}
		}
		}
	}
</style>
