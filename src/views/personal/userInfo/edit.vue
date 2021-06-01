<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>个人资料</div>
			<div style="opacity: 0.3;" @click="gosave">保存</div>
		</div>
		<div class="hx"></div>
		<div class="detail">
			<div class="title">基本信息</div>
			<div class="userpic f">
				<div class="lable">头像</div>
				<div class="pic">
					<div class="changepic">
						<div class="top"></div>
						<div class="bottom f-a-j">修改</div>
					</div>
				</div>
			</div>
			<div class="username f">
				<div class="lable">昵称</div>
				<div style="margin-left: 34px;">薛定谔的猫</div>
				<div style="margin-left: 27px;">修改</div>
			</div>
			<div class="sex f">
				<div class="lable">性别</div>
				<el-select style="margin-left: 34px;" v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="phone f">
				<div class="lable">手机号</div>
				<el-input style="margin-left: 22px;width: 178px;" placeholder="请输入内容" v-model="input" clearable>
				</el-input>

			</div>
			<div class="study">
				<div class="lable" style="opacity: 1;">*选择学习领域</div>
				<div class="f" style="flex-flow: wrap;">
					<div class="lable1" v-for="(item,index)  in 10">家庭教育</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue';
	import router from "../../../router/router.js";
	export default {
		name: "edit",
		setup() {
			let input = ref('');
			let value = ref('');
		    let options = reactive( [{
				value: '选项1',
				label: '男'
			}, {
				value: '选项2',
				label: '女'
			}]);
			const gosave = ()=>{
				router.push("userInfo")
			};
			return {
				input,
				value,
				options,
				gosave
			}
		},
	}
</script>

<style lang="scss" scoped>
	.contair {
		padding-bottom: 84px;
		width: 908px;
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

		.lable {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;
			opacity: 0.5;
		}

		.detail {
			margin-left: 48px;

			.title {
				font-size: 14px;
				font-weight: 500;
				line-height: 20px;
				color: #333333;
				margin-top: 27px;
			}

			.userpic {
				margin-top: 44px;

				.pic {
					width: 50px;
					height: 50px;
					background: #EDEBEB;
					opacity: 1;
					border-radius: 50%;
					margin-left: 28px;
					position: relative;

					.changepic {
						position: absolute;
						bottom: 0;
						width: 50px;
						height: 50px;
						font-weight: 400;
						line-height: 16px;
						color: #FFFFFF;
						font-size: 11px;
						border-radius: 50%;

						.top {
							height: 60%;
						}

						.bottom {
							height: 40%;
							border-bottom-left-radius: 50px;
							border-bottom-right-radius: 50px;
							background: #C3C3C3;
						}
					}
				}

			}

			.username {
				margin-top: 51px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}

			.sex {
				margin-top: 23px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}

			.phone {
				margin-top: 23px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}

			.study {
				margin-top: 23px;

				.lable1 {

					padding: 11px 26px 11px 22px;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #707070;
					margin-right: 22px;
					margin-top: 23px;
					border: 1px solid #DBDBDB;
				}
			}
		}
	}
</style>
