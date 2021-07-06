<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>申请入驻机构</div>
			<div>
				<div class="f-a" style="font-size: 12px; color: rgba(153, 153, 153, 1);height: 20px;">
					<img style="height: 12px;width: 10px;margin-left: 20px;margin-right: 10px;" src="../../../assets/image/personal/dhicon.png"
					 alt="">
					申请服务商>申请入驻机构
				</div>
			</div>
		</div>
		<div class="hx"></div>
		<div class="sub-con">
			<div class="submit f-s" v-for="(item,index) in subList" :key="index">
				<div class="f-a-j">{{item.title}}</div>
				<div>
					<el-input v-model="item.value" :placeholder="item.pl"></el-input>
				</div>
			</div>
			<div class="study-tit">*选择学习领域</div>
			<div class="f lab-con">
				<div class="lable1 hand" @click="selectItme($event,item)" v-for=" (item,index) in 10" :key="index">家庭教育</div>
			</div>
			<div class="study-tit">上传身份证</div>
			<div class="f">
				<el-upload class="avatar-uploader" action="https://api.yucaiedu.com/blade-resource/oss/endpoint/put-file-yvan"
				 :data="subObj" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload">
					<div class="pic picb f-a-j hand" style="margin-top: 35px; margin-bottom: 17px;">
						<div class="ab-con f-a-j">
							拍摄背面
						</div>
					</div>
				</el-upload>
				<el-upload class="avatar-uploader" action="https://api.yucaiedu.com/blade-resource/oss/endpoint/put-file-yvan" name="file"
				 :show-file-list="false" :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload">
					<div class="pic zcbg f-a-j hand" style="margin-top: 35px; margin-bottom: 17px;margin-left: 30px;">
						<div class="ab-con f-a-j">
							拍摄正面
						</div>
					</div>
				</el-upload>
			</div>
			<div class="study-tit" style="margin-top: 53px; margin-bottom: 35px;">上传营业执照</div>
			<el-upload class="avatar-uploader" action="https://api.yucaiedu.com/blade-resource/oss/endpoint/put-file-yvan" name="file"
			 :show-file-list="false" :on-success="handleAvatarSuccess3" :before-upload="beforeAvatarUpload">
				<div class="pic f-a-j hand">
					营业执照
				</div>
			</el-upload>
			<div class="study-tit" style="margin-top: 41px; margin-bottom: 13px;">上传相关证件（选填）*</div>
			<div class="hui" style=" margin-bottom: 24px;">可上传教师资格证等等</div>
			<el-upload class="avatar-uploader" action="https://api.yucaiedu.com/blade-resource/oss/endpoint/put-file-yvan" name="file"
			 :show-file-list="false" :on-success="handleAvatarSuccess4" :before-upload="beforeAvatarUpload">
				<div class="pic hand f-a-j">
					上传
				</div>
			</el-upload>
			<div class="hx" style="margin-top: 80px;"></div>
			<div class="f-j">
				<el-button class="btn-1">取消</el-button>
				<el-button @click="submitInfo" class="btn-1 bule ">保存并提交</el-button>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from "vue"
	import {
		ElMessage
	} from 'element-plus'
	import {
		companySettle
	} from "../../../api/settle.js"
	import {
		validatePhone,
		validateEMail,
		validateName
	} from "../../../util/check.js"
	export default {
		setup() {
			const imageUrl = ref('')
			const checkList = reactive([])
			const subObj = reactive({
				file: ''
			})
			const user = reactive({
				company: "",
				name: '',
				phone: '',
				email: '',
				teachScope: "",
				IDimg: ['', ''],
				companyimg: ['', '']
			})
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
			const selectItme = (event, item) => {
				let className = event.currentTarget.className

				if (checkList.includes(item)) {
					checkList.splice(checkList.findIndex(val => val === item), 1)
					event.currentTarget.className = className.replace(' lable-active', '')

				} else {
					if (checkList.length > 2) {
						return ElMessage('最多只能选3个')
					}
					checkList.push(item)
					event.currentTarget.className = className + ' lable-active'

				}
			}
			const methods = {
				submitInfo() {

					if (!validateEMail(subList[2].value) || !validateName(subList[1].value)) {
						return ElMessage('邮箱格式或者姓名格式不对！请重新输入')
					}
					if (subList[0].value == '') {
						return ElMessage('机构名称不能为空！请重新输入')
					}
					if (checkList.length < 1) {
						return ElMessage('学习邻域至少要选择一个！请选择')
					}
					if (user.IDimg[0] == '' || user.IDimg[1] == '' || user.companyimg[0] ==
						'' || user.companyimg[1] == '') {
						return ElMessage('各种证件图片请上传完整！')
					}
					let obj = {
						"address": "",
						"certificate": [user.companyimg[0] ? user.companyimg[0] : "", user.companyimg[1] ? user.companyimg[
							1] : ""],
						"email": subList[2].value,
						"headImgUrl": "",
						"idCardBack": user.IDimg[0] ? user.IDimg[0] : "",
						"idCardFront": user.IDimg[1] ? user.IDimg[1] : "",
						"name": subList[0].value,
						"personName": subList[1].value,
						"personTel": '',
						"tags": ['']
					}
					companySettle(JSON.stringify(obj)).then(res => {

					})
				},
				handleAvatarSuccess1(res, file) {
					user.IDimg[0].value = URL.createObjectURL(file.raw)
				},
				handleAvatarSuccess1(res, file) {
					user.IDimg[1].value = URL.createObjectURL(file.raw)
				},
				handleAvatarSuccess1(res, file) {
					user.companyimg[0].value = URL.createObjectURL(file.raw)	
				},
				handleAvatarSuccess1(res, file) {
					user.companyimg[1].value = URL.createObjectURL(file.raw)
				},


				beforeAvatarUpload(file) {
					const isJPG = file.type === 'image/jpeg';
					const isLt2M = file.size / 1024 / 1024 < 2;

					if (!isJPG) {
						ElMessage('上传头像图片只能是 JPG 格式!');
					}
					if (!isLt2M) {
						ElMessage('上传头像图片大小不能超过 2MB!');
					}

				}
			}

			return {
				subList,
				checkList,
				selectItme,
				user,
				subObj,
				...methods
			}
		}
	}
</script>

<style lang="scss" scoped>
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

		.study-tit {
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			color: #333333;
		}

		.lab-con {
			width: 524px;
			// justify-content: space-around;
			flex-flow: wrap;
			margin-bottom: 39px;
		}

		.ab-con {
			position: absolute;
			width: 355px;
			height: 47px;
			background-color: rgba(102, 102, 102, 1);
			bottom: -47px;
			color: #FFFFFF;
			border-radius: 0px 0px 8px 8px;
		}

		.picb {
			background-image: url(../../../assets/image/personal/ID.png) !important;
		}

		.lable1 {

			padding: 11px 26px 11px 22px;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: rgba(52, 111, 235, 1);
			margin-top: 23px;
			margin-right: 20px;
			border: 1px solid rgba(52, 111, 235, 1);
		}

		.pic {
			width: 355px;
			height: 165px;
			background: #F0F0F0;
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			position: relative;
			background-size: 100%;
		}

		.zcbg {
			background-image: url(../../../assets/image/personal/IDback.png);
		}

		.btn-1 {
			width: 156px;
			height: 42px;
			background: #F7F7F7;
			border: 1px solid #DBDBDB;
			opacity: 1;
			border-radius: 4px;
			color: rgba(153, 153, 153, 1);
			margin-top: 70px;
		}

		.bule {
			background: #1371F3 !important;
			color: #FFFFFF !important;
			border: 0 !important;
			margin-left: 40px;

		}

		.hui {
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: #333333;
			opacity: 0.3;
		}

		.lable-active {
			background-image: url(../../../assets/image/index/checkStudy.png);
			background-size: 100%;
		}
	}
</style>
