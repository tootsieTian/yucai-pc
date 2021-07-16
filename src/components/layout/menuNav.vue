<template>
	<!--    撑起盒子高度-->
	<div class="nav-hidden" v-if="!navTop">

	</div>
	<div :class="{nav:true,transparent: transparent}">
		<div class="container-menu">
			<div class="f-a-j" @click="toPath('/')">
				<img style="height: 47px;" :src=" transparent == true ? logoWImg : logoBImg   " alt="">
			</div>
			<div class="menu-list">
				<div v-for="item in menuList" :class="{'menu-item': true,'menu-item--active': route.path===item.path}"
					@click="toPath(item.path)">
					<img style="width: 17px;height: 12px;margin-right: 5px;" v-if="item.title=='会员专区'"
						src="../../assets/image/common/openVip.png" alt="">
					{{ item.title }}
				</div>

				<el-row :gutter="20" class="course-classify-list">
					<div class="course-classify-list-triangle">
						<div class="triangle"></div>
					</div>
					<el-col :span="3.5" v-for="item in classList" :key="item+'g'">
						<div class="course-classify-item" @click="toPath('/classifyCourse?classId='+item.id)">
							{{item.name}}
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="nav-right">
				<div class="search">
					<input v-model="searchKey" :style="{background: transparent?'#FFFFFF':'#F4F4F4'}">
					<i class="el-icon-search" @click="toPath('/searchResult')" />
				</div>
				<div class="study" @click="toPath('/study')" v-if="false"> 学习中心</div>
				<div class="user-box" @click="  toPath('/personal/userInfo') ">
					<div class="username">{{!isLogin ? "点击登录" :  userInfo.userName }}</div>
					<el-image class="user-header"
						:src=" !isLogin ? require('../../assets/icon/sucai/doge.jpeg') : userInfo.avatar " />
				</div>
				<div class="not-login-box hand f-c" v-if="isLogin">
					<div style="margin: 10px 0;" v-for="(item,index) in subList" @click="goDetail(item)">{{item.title}}
					</div>
				</div>
			</div>
		</div>
	</div>
	<loginDialog v-if="loginShow" @closeDialog="closeLogin"></loginDialog>
	<openVipDialog @closeDialog="closeDialog" v-if="vipdialogShow"></openVipDialog>
</template>

<script>
	import {
		ElMessageBox
	} from 'element-plus';
	import {
		ElMessage
	} from 'element-plus';
	import {
		ref,
		reactive,
		watch,
		onBeforeMount
	} from 'vue'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import loginDialog from "../../components/common/loginDialog.vue"
	import openVipDialog from "../personal/openVipDialog.vue"
	import {
		classifyOne
	} from "../../api/classify.js"
	import {
		getUserInfo
	} from "../../api/wechat.js"
	export default {
		name: "menuNav",
		emits: ["openVip"],
		components: {
			loginDialog,
			openVipDialog
		},

		setup(props, contxt) {
			const vipdialogShow = ref(false)
			const router = useRouter()
			const route = useRoute()
			const navTop = ref(false)
			const subList = ref([{
				title: "我的消息",
				path: "/personal/message"
			}, {
				title: "课程收藏",
				path: "/personal/collection"
			}, {
				title: "我的订单",
				path: "/personal/Myorder"
			}, {
				title: "我的活动",
				path: "/personal/activity"
			}, {
				title: "优惠券",
				path: "/personal/coupon"
			}, {
				title: "我的收益",
				path: "/personal/profit"
			}, {
				title: "退出登录",
				path: "/"
			}])
			const logoWImg = ref(require('../../assets/image/common/logoWhite.svg'))
			const logoBImg = ref(require('../../assets/image/common/logoBlack.svg'))
			const loginShow = ref(false)
			watch(route, (newVal) => {
				newVal.path === '/' ? navTop.value = true : navTop.value = false

			}, {
				immediate: true
			})


			const menuList = reactive([{
					title: '首页',
					path: '/'
				},
				{
					title: '全部课程',
					path: '/classifyCourse'
				},
				{
					title: '套餐视频',
					path: '/mealCourse'
				},
				{
					title: '课程推荐',
					path: '/personal/profit?index=1'
				},
				{
					title: '会员专区',
					path: ''
				}
				// ,
				//       {
				//         title: '签到',
				//         path: '/signIn'
				//       }
			]) // 菜单列表
			const searchKey = ref('产品规划') // 搜索框关键字
			const isLogin = ref(false) // 是否登录
			const courseClassifyList = ref(null) // 课程分类列表dom
			const toPath = (path) => {
				if(!isLogin.value){
				  return openLogin()
				}
				if (path == '') {
					vipdialogShow.value = true
				}
				router.push(path)
				listenScroll()
			}
			const closeLogin = () => {
				loginShow.value = false
			}
			const openLogin = () => {
				console.log(111)
				loginShow.value = true
			}

			const closeDialog = () => {
				vipdialogShow.value = false
			}
			// 获取个人信息
			const userInfo = ref({})
			const getUesr = async () => {
				const res = await getUserInfo({
					userId: localStorage.getItem('user_id')
				})
				userInfo.value = res
				isLogin.value = true

			}
			if (localStorage.getItem('user_id') != null) {
				getUesr()
			}

			// 右侧标签导航
			const goDetail = (item) => {
				if (item.title == "退出登录") {
					   ElMessageBox.confirm('是否确定退出登录?', '提示', {
					          confirmButtonText: '确定',
					          cancelButtonText: '取消',
					          type: 'warning',
					        })
					          .then(() => {
								  localStorage.removeItem("access_token")
								  localStorage.removeItem('user_id')
					            ElMessage({
					              type: 'success',
					              message: '退出成功!',
					            });
								router.push(item.path)
								isLogin.value=false
					          })
					          .catch(() => {
					          });

				}else{
					router.push(item.path)
				}
				
				
			}

			// 获取一级分类列表
			const classList = ref()
			const getClassfiy = async () => {
				const res = await classifyOne({
					isIndex: 0
				})
				classList.value = res
			}
			getClassfiy()

			// 控制导航栏底部透明
			const transparent = ref(false)
			const listenScroll = () => {
				transparent.value = navTop.value && document.documentElement.scrollTop === 0
			}
			listenScroll()
			window.addEventListener('scroll', listenScroll)
			// onBeforeMount(()=>{
			//   window.removeEventListener('scroll',listenScroll)
			// })
			watch(route, (newVal) => {
				newVal.path === '/' ? navTop.value = true : navTop.value = false
				listenScroll()
			}, {
				immediate: true
			})
			return {
				courseClassifyList,
				transparent,
				isLogin,
				menuList,
				toPath,
				searchKey,
				navTop,
				route,
				openLogin,
				closeLogin,
				loginShow,
				logoWImg,
				logoBImg,
				vipdialogShow,
				closeDialog,
				getClassfiy,
				classList,
				getUesr,
				userInfo,
				subList,
				goDetail
			}
		}
	}
</script>

<style lang="scss" scoped>
	.transparent {
		background: transparent !important;
		color: #FFFFFF !important;
		transition: color 0.4s, background 0.4s;

		.menu-item--active:after {
			background: #FFFFFF !important;
		}
	}

	.nav-hidden {
		height: 104px;
		width: 100%;
	}

	.nav {
		transition: color 0.4s, background 0.4s;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 88;
		font-size: 14px;
		right: 0;
		color: black;
		box-sizing: border-box;
		height: 104px;
		background: #FFFFFF;
		display: flex;

		.container-menu {
			position: relative;
			display: flex;
			align-items: center;
		}
	}

	.logo {
		margin-top: 45px;
		background-color: transparent;
		height: 47px;
		transform: translateY(-25%);
	}

	.logo img {
		width: auto;
		height: 47px;

	}

	.triangle {
		width: 0;
		height: 0;
		border: 10px solid;
		border-color: transparent transparent white transparent;
	}

	.menu-list {
		height: 100%;
		margin-left: 71px;
		width: 500px;
		justify-content: space-between;
		display: flex;

		.menu-item {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
			cursor: pointer;
		}

		.menu-item--active:after {
			content: '';
			left: 50%;
			transform: translateX(-50%);
			bottom: 25px;
			position: absolute;
			width: 15px;
			height: 4px;
			background: rgba(19, 113, 243, 1);
		}
	}

	.menu-item:nth-child(2):hover~.course-classify-list {
		display: flex !important;
	}

	.course-classify-list:hover {
		display: flex;
	}

	.course-classify-list-triangle {
		position: absolute;
		top: -19px;
		left: 150px;
		z-index: 999;
	}

	.course-classify-list {
		border-radius: 4px;
		position: absolute;
		display: none;
		width: 1200px;
		background: #FFFFFF;
		bottom: 0;
		z-index: 88;
		left: 50%;
		transform: translate(-50%, 100%);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
		padding: 25px 0 14px 24px;

		.course-classify-item {
			cursor: pointer;
			height: 43px;
			display: flex;
			align-items: center;
			padding: 0 40px;
			margin-bottom: 18px;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #707070;

		}

		.course-classify-item:hover {
			background-color: rgba(19, 113, 243, 1);
			color: #FFFFFF;
		}
	}

	.search {
		position: relative;
		opacity: 0.8;

		input {
			padding-left: 21px;
			box-sizing: border-box;
			border: none;
			width: 248px;
			height: 48px;
			outline: none;
			color: #333333;
			background: #FFFFFF;
			border-radius: 24px;
		}

		i {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24px;
		}
	}

	.nav-right {
		display: flex;
		align-items: center;
		position: absolute;
		right: 0;

		.study {
			cursor: pointer;
			margin: 0 23px;
		}

		.user-box {
			cursor: pointer;
			display: flex;
			align-items: center;

			.username {
				margin-right: 12px;
				margin-left: 18px;
			}

			.user-header {
				border: 1px solid #FFFFFF;
				width: 48px;
				height: 48px;
				border-radius: 50%;
			}

		}

		// .user-header:hover~ .not-login-box{
		// 	display: flex!important;
		// }
		.user-box:hover~.not-login-box {
			display: flex !important;
		}

		.not-login-box:hover {
			display: flex !important;
		}

		.not-login-box {

			align-items: center;
			position: absolute;
			border-radius: 4px;
			display: none;
			right: 0px;
			top: 50px;
			padding: 10px 30px;
			background-color: #FFFFFF;
			box-sizing: border-box;
			box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.44);
			color: #000000 !important;

			.line {
				margin: 0 12px;
				width: 1px;
				background: #707070;
				height: 18px;
			}
		}

		.not-login-box>div:hover {
			transform: translateX(10%) translateY(-20%);
		}
	}

	.el-icon-search {
		cursor: pointer;
	}
</style>
