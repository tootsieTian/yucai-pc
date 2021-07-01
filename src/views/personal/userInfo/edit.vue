<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>个人资料</div>
			<div  class="hand" style="color: rgba(19, 113, 243, 1);" @click="goSave">保存</div>
		</div>
		<div class="hx"></div>
		<div class="detail">
			<div class="title">基本信息</div>
			<div class="userpic f">
				
				<div class="lable">头像</div>
				<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload"
				>
				  <div class="pic">
					  <img src="../../../assets/icon/sucai/17.png" alt="">
				  	<div class="changepic hand">
				  		<div class="top"></div>
				  		<div class="bottom f-a-j">修改</div>
				  	</div>
				  </div>
				</el-upload>
				
			</div>
			<div class="username f">
				<div class="lable">昵称</div>
				<div style="margin-left: 34px;">薛定谔的猫</div>
				<div style="margin-left: 27px;"  class="hand" @click="open" >修改</div>
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
				<div class="" style="opacity: 1;">*选择学习领域</div>
				<div class="f" style="flex-flow: wrap;">
					<div class="lable1 lable hand" @click="selectItme($event,item)" v-for="(item,index)  in 10">家庭教育
					
					</div>
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
	import { ElMessage } from 'element-plus'
	import router from "../../../router/router.js";
	export default {
		name: "edit",
		setup() {
			const checkList= reactive([])
			const input = ref('');
			const imageUrl = ref('');
			const value = ref('');
		    const options = reactive( [{
				value: '选项1',
				label: '男'
			}, {
				value: '选项2',
				label: '女'
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
			};
			const methods = {
				handleAvatarSuccess(res, file) {
				        this.imageUrl = URL.createObjectURL(file.raw);
				      },
				      beforeAvatarUpload(file) {
				        const isJPG = file.type === 'image/jpeg';
				        const isLt2M = file.size / 1024 / 1024 < 2;
				
				        if (!isJPG) {
				          this.$message.error('上传头像图片只能是 JPG 格式!');
				        }
				        if (!isLt2M) {
				          this.$message.error('上传头像图片大小不能超过 2MB!');
				        }
				        return isJPG && isLt2M;
				      },
					   open() {
					          this.$prompt('请输入昵称', '提示', {
					            confirmButtonText: '确定',
					            cancelButtonText: '取消',
					            inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
					            inputErrorMessage: '昵称格式不正确'
					          }).then(({ value }) => {
					            this.$message({
					              type: 'success',
					              message: '你的昵称是: ' + value
					            });
					          }).catch(() => {
					            this.$message({
					              type: 'info',
					              message: '取消输入'
					            });
					          });
					        }
			}
			const goSave = ()=>{
				router.push("userInfo")
			};
			return {
				input,
				value,
				options,
				goSave,
				selectItme,
				checkList,
				...methods
			}
		},
	}
</script>

<style lang="scss" scoped>
	.contair {
		padding-bottom: 84px;
		width: 100%;
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
                    img{
						width: 50px;
						height: 50px;
					}
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
							height: 70%;
						}

						.bottom {
							height: 30%;
							border-bottom-left-radius: 90px;
							border-bottom-right-radius: 90px;
							background: rgba(51, 51, 51, 0.5);
							font-size: 12px;
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
					color: rgba(19, 113, 243, 1);
					margin-right: 22px;
					margin-top: 23px;
					border: 1px solid rgba(19, 113, 243, 1);
				}
			}
		}
		.lable-active{
			background-image: url(../../../assets/image/index/checkStudy.png);
			background-size: 100%;
		}
	}
</style>
