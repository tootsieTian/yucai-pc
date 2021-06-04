<template>
	<div class="container-main" >
		<div class="header f-a-j">
			<div class="user-info f-s">
				<div class="info-left f">
					<div class="user-pic"></div>
					<div class="user-detail f-c">
						<div class="detail-name f-1">薛定谔的猫</div>
						<div class="detail-id f-1">ID:922598</div>
					</div>
				</div>
				<div class="info-right f">
					<div  @click="goDeatil(item.path)" class="right-item f-c f-a" v-for="(item,index) in subList" :key="index">

						<div class="right-name">{{item.name}}</div>
						<div class="right-num">{{item.num}}</div>

					</div>
				</div>
			</div>
		</div>
		<div class=" f-a-j">
			<div class="mid-con  f-s">
				<div class="aside">
					<el-col :span="12">
						<el-menu router :default-active="active" class="el-menu-vertical-demo">
							<el-menu-item :route="item.path" v-for="(item,index) in menuList" :key="index" :index="index+1">
								<i class="el-icon-menu"></i>
								<template #title>{{item.title}}</template>
							</el-menu-item>
						</el-menu>
					</el-col>
				</div>
				<div class="main1">
					<router-view />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		ref,
		reactive,
		getCurrentInstance,
		watch,
		 onMounted
	} from 'vue';
	import router from "../../router/router.js"
	export default {
		
		name: "index",
		setup() {
			const { ctx } = getCurrentInstance()
		    const active = ref(1);
			// watch(()=>ctx.$router.currentRoute.value.fullPath,(newValue,oldValue)=>{
			
			//  console.log(newValue,'新的路由') 
			//  console.log(oldValue,'旧的路由')
			// })
			const menuList = reactive([{
					title: "个人资料",
					path: '/personal/userInfo'
				},
				{
					title: "我的消息",
					path: '/personal/message'
				},
				{
					title: "测评中心",
					path: '/personal/evaluation'
				},
				{
					title: "我的积分",
					path: '/personal/integral'
				},
				{
					title: "浏览记录",
					path: '/personal/browseHistory'
				},
				{
					title: "领赠记录",
					path: '/personal/giftHistory'
				},
				{
					title: "我的评价",
					path: '/personal/myComment'
				},
				{
					title: "申请服务商",
					path: '/personal/apply'
				}
			]);
			const subList = reactive([{
				name: "课程收藏",
				num: 22,
				path: '/personal/apply'
			}, {
				name: "我的订单",
				num: 10,
				path: '/personal/apply'
			}, {
				name: "我的活动",
				num: 2,
				path:'/personal/activity'
			}, {
				name: "优惠券",
				num: 6,
				path:'/personal/coupon'
			}, {
				name: "我的收益",
				num: "￥115",
				path:'/personal/apply'
			}, ]);
			const goDeatil = (path)=>{
				router.push(path)
			};
			    onMounted(() => {
			     menuList.forEach((item,index)=>{
			     					 if(item.path==ctx.$router.currentRoute.value.fullPath){
			     						 active.value=index+1
										 console.log(active.value)
			     					 }
			     })
			    })

			return {
				subList,
				menuList,
				goDeatil,
				active
			}
		},
	
		
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 213px;
		background: #F5F5F5;
		box-sizing: border-box;
		padding-top: 90px;

		.user-info {
			width: calc(100vw - 720px);

			.info-left {
				margin-left: 22px;

				.user-pic {
					width: 131px;
					height: 131px;
					background: #EFEFEF;
					border-radius: 50%;
				}

				.user-detail {
					margin-left: 44px;
					height: 131px;

					.detail-name {
						padding-top: 30px;
						font-size: 22px;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 30px;
					}

					.detail-id {
						padding-top: 5px;
						font-size: 13px;
						font-family: PingFang SC;
						font-weight: 400;
						line-height: 18px;
						color: #333333;
						opacity: 0.2;
					}
				}
			}

			.info-right {
				.right-item {
					width: 106px;
					height: 100%;
				}

				.right-name {
					margin-top: 20px;
					font-size: 14px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
				}

				.right-num {
					margin-top: 14px;
					font-size: 22px;
					font-family: PingFang SC;
					font-weight: 400;
					line-height: 30px;
					color: #333333;
					opacity: 1;

				}
			}

		}
	}

	.mid-con {
		width: calc(100vw - 720px);
		padding-top: 47px;
		padding-bottom: 85px;
	}

	.aside {}

	.main1 {
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		width: 904px;
		// height: auto;
	}

	::v-deep .el-menu-vertical-demo {
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		background: #FFFFFF;
		width: 252px;
		padding-top: 35px;
		padding-bottom: 20px;
		box-sizing: border-box;
	}

	::v-deep .el-menu-item {
		// margin: 20px 0;
		// height: 20px;
		// display: flex;
		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 400;
		padding: 0;
		opacity: 0.6;
		padding-left: 0 !important;
		// justify-content: center;
		// align-items: center;
		// box-sizing: border-box;

	}

	.el-icon-menu {
		padding-left: 50px;

	}

	.is-active {
		.el-icon-menu {

			border-left: 4px solid #7B7B7B;
		}
	}
</style>
