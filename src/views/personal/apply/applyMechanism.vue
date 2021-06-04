<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>申请服务商</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="sub-con">
			<div class="submit f-s" v-for="(item,index) in subList" :key="index">
				<div class="f-a-j" >{{item.title}}</div>
				<div>
					<el-input v-model="item.value" :placeholder="item.value"></el-input>
				</div>
			</div>
			<div class="study-tit" >*选择学习领域</div>
			<div class="f lab-con" >
							   <div class="lable1"  @click="selectItme($event,item)" v-for=" (item,index) in 10" :key="index" >家庭教育</div>
							   
			</div>
			<div class="study-tit" >上传身份证</div>
		
			<div class="pic f-a-j" style="margin-top: 35px; margin-bottom: 17px;" >
				身份证正面
			</div>
			<div class="pic f-a-j" >
				身份证反面
			</div>
			<div class="study-tit" style="margin-top: 53px; margin-bottom: 35px;" >上传营业执照</div>
			<div class="pic f-a-j" >
				营业执照
			</div>
			<div class="study-tit" style="margin-top: 41px; margin-bottom: 13px;" >上传相关证件（选填）*</div>
			<div class="hui" style=" margin-bottom: 24px;" >可上传教师资格证等等</div>
			<div class="pic f-a-j" >
				上传
			</div>
			<div class="f-j" >
				 <el-button class="btn-1" >取消</el-button>
				  <el-button class="btn-1" >立即申请</el-button>
			</div>
		</div>
	
	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from "vue"
	import { ElMessage } from 'element-plus'
	export default {
		setup() {
			const checkList= reactive([])
			const subList = reactive([{
				title: "机构名称",
				pl: "请输入机构名称",
				value: ""
			}, {
				title: "代表人姓名",
				pl: "请输入代表人姓名",
				value: ""
			}, {
				title: "邮箱",
				pl: "请输入邮箱",
				value: ""
			}]);
			const selectItme  = (event,item)=>{
				let className = event.currentTarget.className
				
				if (checkList.includes(item)) {
				  checkList.splice(checkList.findIndex(val => val === item), 1)
				  event.currentTarget.className = className.replace(' lable-active', '')
				
				} else {
				  if (checkList.length > 2) {
				    return  ElMessage('最多只能选3个')
				  }
				  checkList.push(item)
				  event.currentTarget.className = className + ' lable-active'
				
				}
			}
			return {
				subList,
				checkList,
				selectItme
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

		.sub-con {
			padding: 28px 0 47px 49px;
			box-sizing: border-box;
			

			.submit {
				width: 326px;
				margin-bottom: 22px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
				opacity: 0.5;
			}
		}
		.study-tit{
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: #333333;
		}
		.lab-con{
			width: 524px;
			// justify-content: space-around;
			flex-flow: wrap;
			margin-bottom: 39px;
		}
		.lable1{
                   
					padding: 11px 26px 11px 22px;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #707070;
					margin-top: 23px;
					margin-right: 20px;
					border: 1px solid #DBDBDB;
				}
				.pic{
					width: 355px;
					height: 165px;
					background: #F0F0F0;
					font-size: 15px;
					font-weight: 400;
					line-height: 21px;
					color: #333333;
				}
				.btn-1{
					width: 155px;
					height: 42px;
				
					margin: 59px 24px 0 24px;
				}
			.hui{
				font-size: 13px;
				font-weight: 400;
				line-height: 18px;
				color: #333333;
				opacity: 0.3;
			}
			.lable-active{
				background-color: #53A8FF;
			}
	}
</style>

